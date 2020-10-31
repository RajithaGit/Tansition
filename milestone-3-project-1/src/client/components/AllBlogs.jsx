import React, { useContext } from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import BlogList from "./BlogList";
// context
import { BlogContext } from "../contexts/BlogContext";

const AllBlogs = () => {
  const { showForm } = useContext(BlogContext);
  return (
    <>
      <Navbar />
      {showForm ? <Form /> : <BlogList />}
    </>
  );
};

export default AllBlogs;
