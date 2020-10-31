import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import BlogContextProvider from "./contexts/BlogContext";

ReactDOM.render(
  <BrowserRouter>
    <BlogContextProvider>
      <App />
    </BlogContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
