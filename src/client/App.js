import React, { useState } from "react";
import Delete from "./Delete";
import Post from "./Post";
import Put from "./Put";

const App = () => {
  const [titles, setTitles] = useState(null);
  const [databaseData, setDatabaseData] = useState(null);

  const getOnClickHandler = () => {
    // make a get call to /api/preso
    // with the data returned, use setTitles() to
    // update state with the data
  };

  const getDatabaseOnClickHandler = () => {
    // make a get call to /api/preso
    // with the data returned, use setTitles() to
    // update state with the data
  };

  return (
    <main>
      <button onClick={getOnClickHandler}>
        Click me to get preso item titles
      </button>
      <button onClick={getDatabaseOnClickHandler}>
        Click me to get what is currently in the database
      </button>
      {titles ? (
        <React.Fragment>
          <h1>Here are the titles</h1>
          <ul>
            {titles.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </React.Fragment>
      ) : null}
      {databaseData ? (
        <React.Fragment>
          <h1>Here is what is in the database</h1>
          {databaseData}
        </React.Fragment>
      ) : null}
      <div>
        <h1>POST</h1>
        <Post />
        <h1>PUT</h1>
        <Put />
        <h1>DELETE</h1>
        <Delete />
      </div>
    </main>
  );
};

export default App;
