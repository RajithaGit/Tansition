/* eslint-disable react/prop-types */
import React from "react";

const Like = ({ liked, onClick }) => {
  let classes = "fa like cursor fa-heart";
  if (!liked) classes += "-o";
  return <i onClick={onClick} className={classes} aria-hidden="true" />;
};

export default Like;
