const express = require("express");
const presoController = require("./controller/presoController");

const app = express();

const notFoundImageUrl =
  "http://i5.walmartimages.com/dfw/4ff9c6c9-64e4/k2-_cf34b75a-7d8e-44a1-935c-2b5bc9bb031c.v1.jpg";

// serve public folder using express
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded()); //Parse URL-encoded bodies

// <------------------------- PAGES --------------------------------->
// create a route at /pages/hello-world to serve a h1 with header
app.get("/pages/hello", (req, res) => {
  // response should send back a status code of 200
  // response should send a h1 with the text hello
  res.status(200).send("<h1>hello world</h1/>");
});

// create a route at /pages/not-found to serve an error page
app.get("/pages/not-found", (req, res) => {
  // response should send back a status code of 404
  // response should send back an image element with the src pointing to notFoundImageUrl
  res.status(404).send(`<img src=${notFoundImageUrl} />`);
});

app.get("/pages/internal-server-error", (req, res) => {
  // response should send back a status code of 500
  // response should send back an h1 element with the text - Internal Server Error
  res.status(500).send("<h1>Internal Server Error</h1>");
});

// <------------------------- APIS --------------------------------->

// get request
// 1. get to /api/preso
// 2. middlewares should fetch preso, write to the database, process the preso response, send back the item tiles
// 3. when this endpoint gets hit, see what happens to data.json
app.get(
  "/api/preso",
  presoController.fetchPreso,
  presoController.writeToDatabase,
  presoController.processPresoResponse,
  presoController.sendBackItemTitles
);

// get to api/preso/database
// middleware should get the data in the database and then send it back to the client with a status 200
app.get("/api/preso/database", presoController.sendDatabaseData, (req, res) => {
  res.status(200).json(JSON.stringify(res.locals.db, null, 2));
});

// post to api/preso
// middlewares should
app.post(
  "/api/preso",
  presoController.writeUserTextToDatabase,
  presoController.writeToDatabase,
  (req, res) => {
    res.status(201).json("successfully created");
  }
);

// delete to api/preso
// 1. middlewares should delete the database and send a status 200 with the json of delete successful
app.delete(
  "/api/preso",
  presoController.deleteDatabaseData,
  presoController.sendDatabaseData,
  (req, res) => {
    res
      .status(200)
      .json(
        `delete successful: this is what's in the database ${JSON.stringify(
          res.locals.db,
          null,
          2
        )}`
      );
  }
);

app.put(
  "/api/preso",
  presoController.sendDatabaseData,
  presoController.modifyUserTextToDatabase,
  presoController.writeToDatabase,
  (req, res) => {
    res.status(200).json("success");
  }
);

// port
app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
