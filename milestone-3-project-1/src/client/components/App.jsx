/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
// components
import MainNav from "./MainNav";
import BloggingTips from "./BloggingTips";
import AboutUs from "./About";
import NotFound from "./NotFound";
import AllBlogs from "./AllBlogs";
// context
import { BlogContext } from "../contexts/BlogContext";
// css
import "../app.css";

const App = () => {
  const { showForm } = useContext(BlogContext);
  return (
    <React.Fragment>
      <MainNav />
      <main className="container">
        <Switch>
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/blogs" component={AllBlogs} />
          <Route path="/bloggingtips" component={BloggingTips} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/blogs" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
};

export default App;
