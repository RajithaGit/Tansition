import React, { useState } from "react";

const Navbar = ({ toggle, setModifyBlog }) => {
  const [successMessage, setSuccessMessage] = useState(null);

  const onClickAddHandler = () => {
    setModifyBlog({});
  };

  const onClickDeleteHandler = () => {
    const sendData = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" }
    };
    fetch("/api/blog", sendData)
      .then((response) => response.json())
      .then((data) => setSuccessMessage(data));
  };
  return (
    <nav className="nav">
      <div>
        <h1>To Blog = To Create, To Share, To Connect......</h1>
      </div>
      <div className="navBtns">
        <button
          className="navBtn"
          onClick={() => {
            toggle();
            onClickAddHandler();
          }}
        >
          Add new blog
        </button>
        <button
          className="navBtn"
          onClick={() => {
            toggle();
            onClickDeleteHandler();
          }}
        >
          Delete all blogs
        </button>
        <br />
      </div>
      {successMessage ? <div>{successMessage}</div> : null}
    </nav>
  );
};

export default Navbar;
