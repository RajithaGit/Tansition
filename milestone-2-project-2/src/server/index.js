const express = require("express");
const middleWare = require("./controller/middleWare");

// code here
const app = express();

app.use(express.static("public"));
app.use(express.json()); // parses incoming reqs with JSON payloads

app.get("/pages/hello", (req, res) => res.status(200).send("<h1>Hello!</h1>"));

// display blogs
app.get("/api/blog", middleWare.sendDatabaseData, (req, res) => {
  res.status(200).json(res.locals.blog);
});

// display blog id
app.get("/api/blog/id", middleWare.sendBlogId, (req, res) => {
  res.status(200).json(JSON.stringify(res.locals.idCounter, null, 2));
});

// post new blog
app.post(
  "/api/blog",
  middleWare.setUserTextOnLocalsObject,
  middleWare.appendUserTextToDatabase,
  middleWare.writeToDatabase,
  (req, res) => {
    res.status(201).json("Successfully created a new blog");
  }
);

// update blog
app.put(
  "/api/blog",
  middleWare.setUserTextOnLocalsObject,
  middleWare.modifyUserTextToDatabase,
  middleWare.writeToDatabase,
  (req, res) => {
    res.status(200).json("Updated blog successfully");
  }
);

// delete all blogs
app.delete(
  "/api/blog",
  middleWare.setUserTextOnLocalsObject,
  middleWare.deleteDatabaseData,
  (req, res) => {
    res.status(200).json("Deleted all blogs successfully");
  }
);

// delete individual blog
app.delete(
  "/api/blog/:id",
  middleWare.setUserTextOnLocalsObject,
  middleWare.deleteDatabaseSingleData,
  (req, res) => {
    res.status(200).json("Deleted blog successfully");
  }
);

app.listen(process.env.PORT || 8080, () => {
  console.log("port :", process.env.PORT);
  console.log(`Listening on port ${process.env.PORT || 8080}!`);
});
