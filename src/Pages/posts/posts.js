//Basic imports 
import React, { useState, useEffect, useMemo } from "react";
import "./posts.css";

//Packages imports
import Pagination from '../../Components/Pagination/pagination';
import renderHTML from 'react-render-html';
import ReactLoading from 'react-loading';
import {Link} from "react-router-dom";

//services imports
import { getClientPosts } from '../../services/postsService';

const posts = () => {
  let PageSize = 96;
  const [postsdata, setPostsdata] = useState([]);
  const [postsNumber, setPostsNumber] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  // const [PageSize, setPageSize] = useState(1);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getClientPosts().then(
      (result) => {
        if (result) {
          setPostsdata(result.posts);
          // setPageSize(result.limit);
          setPostsNumber("(" + result.total + ")");
          setIsLoaded(true);
        }
        setIsLoaded(true);
      }
    )
  }, [])
  const currentPostsData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return postsdata.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, postsdata]);

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
                {Array.isArray(currentPostsData) && currentPostsData.length ? (
                  currentPostsData.map((post, index) => (
                    <div key={index} className="col-sm-12 col-md-4 col-xxl-3 col-with-bottom-pad post-max-width">
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

                              {Array.isArray(post.products) && post.products.length ? (
                                <div className={post.products !== "null" ? "post-tag-icon visible" : "post-tag-icon"}>
                                  <div className="post-tagged-count">
                                    <p>{post.products.length}</p>
                                  </div>
                                </div>
                              ) : (<div className="post-tag-icon"></div>)}

                            </div>
                            <div className="actions-overlay">
                              <a href="/posts" className="push-to-top"> </a>
                              <a href={"https://app.oculizm.com/edit-post/?post_id=" + post.post_id} className="edit" target='_blank' rel='noopener noreferrer'> </a>
                              <Link to="/edit-post" className="edit"></Link>
                              <a href="/posts" className="close"> </a>
                            </div>
                            <div className="gallery-post-title">
                              <p>{renderHTML(post.post_title)}</p>
                            </div>
                          </div>
                        </a>
                        <div className="posts-media-text">
                          <p>{post.caption}</p>
                        </div>
                      </div>
                    </div>
                  )
                  )) : (<div>No posts yet.</div>)}

              </div>

            </div>
          </div>
        </div>
      </div>
    </>

  );



};

export default posts;