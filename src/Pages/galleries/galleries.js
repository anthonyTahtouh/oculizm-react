//Basic imports 
import React, { useState, useEffect } from "react";
import "./galleries.css";

//Packages imports
import ReactLoading from 'react-loading';

//services imports
import { getClientGalleries } from '../../services/galleriesService';

const galleries = () => {

  //react hooks to set and populate variables value to use it later in html rendering
  const [galleriesdata, setGalleriesdata] = useState([]);
  const [galleriesNumber, setGalleriesNumber] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {

    // getting the client galleries from the api using the getClientGalleries function
    getClientGalleries().then(
      (result) => {
        if (result) {
          // getting post for evey gallery 
          const promises = result.map(async item => {
            const response = await fetch(`https://app.oculizm.com/wp-admin/admin-ajax.php?action=get_oculizm_posts&gallery_id=${item.id}`);
            return await response.json();
          });

          // add these posts to posts array inside the main results array 
          Promise.all(promises).then(posts => {
            const galleryPostsData = posts.map(galleryPosts => galleryPosts.posts);
            let i = 0;
            for (i; i < result.length; i++) {
              result[i]['posts'] = galleryPostsData[i];

            }
            setGalleriesdata(result);
            setGalleriesNumber("(" + result.length + ")");
            setIsLoaded(true);
          })
        }
      }
    )
  }, [])

  // showing a react loader if data not ready yet 
  if (!isLoaded) {
    return (
      <div className="row">
        <div className="col-xxl-12">
          <div className="loader-container">
            <ReactLoading color={"black"} height={'auto'} width={'6%'} type={"spin"} />
          </div>
        </div>
      </div>
    );

  }

  return (
    <>
      <div>
        <div className="row">
          <div className="col-xxl-12">
            <h1 className="page-title">
              Galleries {galleriesNumber}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            {Array.isArray(galleriesdata) && galleriesdata.length ? (
              galleriesdata.map((gallery, index) => (
                <div className="white-content-block" key={index}>
                  <h2 className="gallery-name">{gallery.name} ({gallery.posts.length}) </h2>
                  <div className="row display-flex">
                    {gallery.posts.slice(0, 4).map((galleryPosts, index) => (
                      <div className="col-sm-12 col-md-4 col-xxl-3 col-with-bottom-pad post-max-width" key={galleryPosts.post_id} >
                        <div className="post" style={{ padding: '10px' }}>
                          <div className="post-image">
                            <img
                              src={galleryPosts.image_url}
                              className='img-thumbnail'
                              alt='...'
                            />
                            {index === 3 &&
                              <div class="dots-overlay"><span></span><span></span><span></span></div>
                            }
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
              )) : (<div>This client has no galleries</div>)}

          </div>
        </div>
      </div>
    </>

  );



};

export default galleries;