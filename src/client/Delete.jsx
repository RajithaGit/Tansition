import React, { useState } from "react";

const Delete = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const onClickHandler = () => {
    // make a post request to /api/preso
    // with the data returned, use setSuccessMessage()
    // to update state with the returned data
    fetch("/api/preso", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setSuccessMessage(data);
      });
  };

  return (
    <div>
      <button onClick={onClickHandler} type="submit">
        Submit
      </button>
      {successMessage ? (
        <div>This is the success message : {successMessage}</div>
      ) : null}
    </div>
  );
};

export default Delete;
