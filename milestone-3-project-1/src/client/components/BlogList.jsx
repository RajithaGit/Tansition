import React, { useContext } from "react";
import Blog from "./Blog";
import { BlogContext } from "../contexts/BlogContext";

const BlogList = () => {
  const { blogs } = useContext(BlogContext);

  if (!blogs || (blogs && blogs.length === 0)) {
    return <h2>No Blogs</h2>;
  }

  return blogs.map((blog) => <Blog key={blog.id} blog={blog} />);
};

export default BlogList;
