/* eslint-disable no-param-reassign */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
import React, { useState, useContext } from "react";
import { BlogContext } from "../contexts/BlogContext";
import Like from "./Like";

const Blog = ({ blog }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const { setModifyBlog, toggle } = useContext(BlogContext);

  const onClickDeleteBlogHandler = (deleteBlogId) => {
    const apiURL = `/api/blog/${deleteBlogId}`;
    const sendData = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: deleteBlogId }, 2, null)
    };
    fetch(apiURL, sendData)
      .then((response) => response.json())
      .then((data) => setSuccessMessage(data));
  };
  const onClickModifyBlogHandler = (modifyBlog) => {
    setModifyBlog(modifyBlog);
  };
  const onClickLikeHandler = (blog) => {
    blog.liked = !blog.liked;
    setModifyBlog(blog);

    const sendData = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    };
    fetch("/api/blog", sendData).then((response) => response.json());
  };

  return (
    <>
      <div>
        <div className="blgContent">
          <div className="blgHeader">
            <h3 className="h3Txt">{blog.header}</h3>
            <Like liked={blog.liked} onClick={() => onClickLikeHandler(blog)} />
          </div>
          <div>
            <p className="blogText">{blog.text}</p>
          </div>
        </div>
        <div>
          <button
            className="btns"
            onClick={() => {
              toggle();
              onClickModifyBlogHandler(blog);
            }}
          >
            Modify
          </button>
          <button
            className="btns"
            onClick={() => {
              // toggle();
              onClickDeleteBlogHandler(blog.id);
            }}
          >
            Delete
          </button>
          {successMessage ? <div className="msg">{successMessage}</div> : null}
        </div>
      </div>
    </>
  );
};

export default Blog;
