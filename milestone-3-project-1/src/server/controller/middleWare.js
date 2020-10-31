const fs = require("fs");

const dbPath = `${__dirname}/data.json`;

module.exports = {
  sendDatabaseData: (req, res, next) => {
    const db = JSON.parse(fs.readFileSync(dbPath));
    res.locals.blog = db;
    next();
  },

  sendBlogId: (req, res, next) => {
    const db = JSON.parse(fs.readFileSync(dbPath));
    res.locals.idCounter = db.idCounter;
    next();
  },

  setUserTextOnLocalsObject: (req, res, next) => {
    const db = JSON.parse(fs.readFileSync(dbPath));
    res.locals.blog = db;
    next();
  },

  writeToDatabase: (req, res, next) => {
    fs.writeFileSync(dbPath, JSON.stringify(res.locals.blog, null, 2));
    next();
  },

  appendUserTextToDatabase: (req, res, next) => {
    res.locals.blog.idCounter = req.body.id;
    res.locals.blog.posts[res.locals.blog.posts.length] = req.body;
    next();
  },

  modifyUserTextToDatabase: (req, res, next) => {
    let count = 0;
    res.locals.blog.posts.forEach((blog) => {
      if (blog.id === req.body.id) {
        res.locals.blog.posts[count] = req.body;
      }
      count += 1;
    });
    next();
  },

  deleteDatabaseData: (req, res, next) => {
    res.locals.blog.posts = [];
    fs.writeFileSync(dbPath, JSON.stringify(res.locals.blog, null, 2));
    next();
  },

  deleteDatabaseSingleData: (req, res, next) => {
    res.locals.blog.posts = res.locals.blog.posts.filter(
      (blog) => blog.id !== req.body.id
    );
    fs.writeFileSync(dbPath, JSON.stringify(res.locals.blog, null, 2));
    next();
  }
};
