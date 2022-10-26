//Basic imports 
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./edit-post.css";

//services imports
import { getSinglePost } from '../../services/postsService';
import ReactLoading from 'react-loading';



const edit_post = () => {

  const location = useLocation();
  const { post_id } = location.state;
  const [singlePostsdata, setSinglePostsdata] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getSinglePost(post_id).then(
      (result) => {
        if (result) {
          // console.log('result', result);
          setSinglePostsdata(result);
          setIsLoaded(true);
        }
      }
    )
  }, [post_id])

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
              Edit post: {singlePostsdata.post_title}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="white-content-block">
              <div className="post-meta" data-social-network={singlePostsdata.social_network}>
                <div className="post-meta-item">
                  <div className="post-meta-label">ID:</div>
                  <div className="post-meta-value">{singlePostsdata.post_id}</div>
                </div>
                <div className="post-meta-item">
                  <div className="post-meta-label">Social ID:</div>
                  <div className="post-meta-value">{singlePostsdata.social_id}</div>
                </div>
                <div className="post-meta-item">
                  <div className="post-meta-label">Published:</div>
                  <div className="post-meta-value">{singlePostsdata.date}</div>
                </div>
                <div className="post-meta-item">
                  <div className="post-meta-label">Post source:</div>
                  <div className="post-meta-value">{singlePostsdata.permalink}</div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-12">
                  <img
                    src={singlePostsdata.image_url}
                    className='img-thumbnail'
                    alt='...'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );

};

export default edit_post;