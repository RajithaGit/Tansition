/* eslint-disable react/prop-types */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";

export const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);
  const [modifyBlog, setModifyBlog] = useState({});
  const [blogId, setBlogId] = useState(null);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.posts);
        setBlogId(data.idCounter);
      });
  }, [showForm]);

  const toggle = () => {
    setShowForm(!showForm);
  };

  return (
    <BlogContext.Provider
      value={{
        showForm,
        setShowForm,
        modifyBlog,
        setModifyBlog,
        blogId,
        setBlogId,
        blogs,
        setBlogs,
        toggle
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
