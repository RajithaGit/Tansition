import React, { useState, useEffect } from "react";
// components
import Navbar from "./Navbar";
import Form from "./Form";
import BlogList from "./BlogList";

// css
import "../app.css";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [blogId, setBlogId] = useState(null);
  const [blogs, setBlogs] = useState(null);
  const [modifyBlog, setModifyBlog] = useState({});

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
    <>
      <Navbar toggle={toggle} setModifyBlog={setModifyBlog} />
      {showForm ? (
        <Form blogId={blogId} toggle={toggle} modifyBlog={modifyBlog} />
      ) : (
        <BlogList blogs={blogs} toggle={toggle} setModifyBlog={setModifyBlog} />
      )}
    </>
  );
};

export default App;
