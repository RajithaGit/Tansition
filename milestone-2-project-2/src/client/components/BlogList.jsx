import React from "react";
import Blog from "./Blog";

const BlogList = ({ blogs, toggle, setModifyBlog }) => {
  if (!blogs || (blogs && blogs.length === 0)) {
    return <h2>No Blogs</h2>;
  }

  return blogs.map((blog) => (
    <Blog
      key={blog.id}
      blog={blog}
      toggle={toggle}
      setModifyBlog={setModifyBlog}
    />
  ));
};

export default BlogList;
