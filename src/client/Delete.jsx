import React, { useState } from "react";

const Delete = () => {
  const [successMessage, setSuccessMessage] = useState(null);

  const onClickHandler = () => {
    // make a delete request to /api/preso
    // set the correct headers
    // with the data returned, use setSuccessMessage()
    // to update state with the returned data
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
