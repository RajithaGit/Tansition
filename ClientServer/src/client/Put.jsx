import React, { useState } from "react";

const Put = () => {
  const [text, setText] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };

  const onClickHandler = () => {
    // make a PUT request to /api/preso
    // set the correct headers
    // with the data returned, use setSuccessMessage()
    // to update state with the returned data
    const sendData = {
      method: 'PUT',
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

export default Put;
