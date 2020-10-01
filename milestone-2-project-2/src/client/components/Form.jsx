import React, { useState } from "react";

const Form = ({ blogId, toggle, modifyBlog }) => {
  const [formBlogHeader, setFormBlogHeader] = useState(modifyBlog.header);
  const [formBlogText, setFormBlogText] = useState(modifyBlog.text);
  const [successMessage, setSuccessMessage] = useState(null);
  let displayBlogId;
  let httpMethod;

  if (Object.values(modifyBlog).length >= 1) {
    displayBlogId = modifyBlog.id;
    httpMethod = "PUT";
  } else {
    displayBlogId = blogId + 1;
    httpMethod = "POST";
  }

  const onChangeHeaderHandler = (e) => {
    setFormBlogHeader(e.target.value);
  };

  const onChangeTextHandler = (e) => {
    setFormBlogText(e.target.value);
  };

  const onClickAddHandler = () => {
    const blogObj = {
      id: displayBlogId,
      header: formBlogHeader,
      text: formBlogText
    };

    const sendData = {
      method: httpMethod,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blogObj)
    };
    fetch("/api/blog", sendData)
      .then((response) => response.json())
      .then((data) => setSuccessMessage(data));
  };

  return (
    <>
      <div className="form">
        <div>
          <h2>New Blog</h2>
          <form id="blogForm">
            <label for="blogId" className="label">
              Blog Id:
            </label>
            <input
              id="blogId"
              name="id"
              type="text"
              defaultValue={displayBlogId}
              readOnly
            />
            <label for="title" className="label">
              Title:
            </label>
            <input
              onChange={onChangeHeaderHandler}
              id="title"
              name="title"
              type="text"
              defaultValue={formBlogHeader}
            />
          </form>
          <br />
          <textarea
            onChange={onChangeTextHandler}
            rows="10"
            cols="100"
            name="blog"
            defaultValue={formBlogText}
          />
        </div>
        <div className="blogBtns">
          <button className="btns" onClick={onClickAddHandler}>
            Add
          </button>
          <button className="btns" onClick={toggle}>
            Cancel
          </button>
          {successMessage ? <div>{successMessage}</div> : null}
        </div>
      </div>
    </>
  );
};

export default Form;
