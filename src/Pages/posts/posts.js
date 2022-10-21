//Basic imports 
import React, { useState, useEffect, useMemo } from "react";
import "./posts.css";

import Pagination from '../../Components/Pagination/pagination';

//services imports
import { getClientPosts } from '../../services/postsService';

let PageSize = 10;


const posts = () => {

  const [postsdata, setPostsdata] = useState([]);
  const [postsNumber, setPostsNumber] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getClientPosts().then(
      (result) => {
        setPostsdata(result.posts);
        setPostsNumber("(" + result.total + ")");
        setIsLoaded(true);
      }
    )
  }, [])
  const currentPostsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return postsdata.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);


  if (!isLoaded) {
    return <div className="App">Loading...</div>;
  }

  return (
    <>
      <div>
        <div className="row">
          <div className="col-xxl-12">
            <h1 className="page-title">
              Posts {postsNumber}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-12">
            <div className="white-content-block">
              <div className="row display-flex">
                <Pagination
                  className="pagination-bar"
                  currentPage={currentPage}
                  totalCount={postsdata.length}
                  pageSize={PageSize}
                  onPageChange={page => setCurrentPage(page)}
                />
                {currentPostsData.map(post => (
                  <div className="col-xxl-3 col-md-3 col-sm-12 col-with-bottom-pad" style={{ maxWidth: '25%' }}>
                    <div className="post" data-post-id={post.post_id} data-post-status={post.post_status} data-social-id={post.social_id} style={{ padding: '10px' }}>
                      <a href={post.source_url} target='_blank' rel='noopener noreferrer'>
                        <div className="post-image">
                          <img
                            src={post.image_url}
                            className='img-thumbnail'
                            alt='...'
                          />
                          <div className="attributes-overlay">
                            <div className="post-status-icon"></div>
                            <div className={post.social_network ? "post-social-icon-" + post.social_network + " visible post-social-icon" : "post-social-icon"}></div>
                            <div className={post.products !== "null" ? "post-tag-icon visible" : "post-tag-icon"}>
                              <div className="post-tagged-count">
                                <p>{post.products.length}</p>
                              </div>
                            </div>
                          </div>
                          <div className="actions-overlay">
                            <a href="/posts" className="push-to-top"> </a>
                            <a href={"https://app.oculizm.com/edit-post/?post_id=" + post.post_id} className="edit" target='_blank' rel='noopener noreferrer'> </a>
                            <a href="/posts" className="close"> </a>
                          </div>
                          <div className="gallery-post-title">
                            <p charset="UTF-8" Content-Type="text/html">{post.post_title}</p>
                          </div>
                        </div>
                      </a>
                      <div className="posts-media-text">
                        <p>{post.caption}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>

  );



};

export default posts;