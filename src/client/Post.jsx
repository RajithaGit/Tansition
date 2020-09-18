import React, { useState } from "react";

const Post = () => {
  const [text, setText] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onClickHandler = () => {
    // make a post request to /api/preso
    // the body should contain the text
    // set the correct headers
    // with the data returned, use setSuccessMessage()
    // to update state with the returned data
    const sendData = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    };
    fetch('/api/preso', sendData)
      .then(response => response.json())
      .then(data => setSuccessMessage(data));
  };

  return (
    <div>
      <input onChange={onChangeHandler} />
      <button onClick={onClickHandler} type="submit">
        Submit
      </button>
      {successMessage ? (
        <div>This is the success message : {successMessage}</div>
      ) : null}
    </div>
  );
};

export default Post;
