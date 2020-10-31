/* eslint-disable react/self-closing-comp */
/* eslint-disable arrow-body-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink } from "react-router-dom";

const MainNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-nav">
        <Link className="navbar-brand msg navbar" to="/">
          VBlog
        </Link>
        <NavLink className="nav-item nav-link msg navbar" to="/aboutus">
          About Us
        </NavLink>
        <NavLink className="nav-item nav-link msg navbar" to="/blogs">
          Blogs
        </NavLink>
        <NavLink className="nav-item nav-link msg navbar" to="/bloggingtips">
          Blogging Tips
        </NavLink>
      </div>
    </nav>
  );
};

export default MainNav;
