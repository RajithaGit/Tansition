const fetch = require("node-fetch");
const fs = require("fs");

const presoUrl = "http://preso.prod-a.walmart.com/preso/search?";
const dbPath = `${__dirname}/data.json`;

module.exports = {
  // fetch preso should make a get call to the preso url
  // the data returned should be stored on the locals object of the response object
  // under the field, "preso"
  // next should be called at the end
  fetchPreso: async (req, res, next) => {
    const response = await fetch(presoUrl);
    const response2 = await response.json();

    res.locals.preso = response2;
    next();
  },

  // process response should look at the preso field on the locals object
  // it should map over the items in the preso object and return each item's title.
  // The titles array should be set on a field called "titles" on the locals object
  // next should be called at the end
  processPresoResponse: (req, res, next) => {
    const titles = res.locals.preso.items.map((item) => item.title);
    res.locals.titles = titles;
    next();
  },

  // this will send to the client, the titles that were on the locals object of the response
  // there is no next as it is not expected to go to another middleware
  sendBackItemTitles: (req, res) => {
    return res.status(200).send(res.locals.titles);
  },

  // this writes what's in the res.locals.preso to the database
  writeToDatabase: (req, res, next) => {
    // write to the database
    fs.writeFileSync(dbPath, JSON.stringify(res.locals.preso, null, 2));

    next();
  },

  // this will read the data in the database
  // sets the data on the locals object
  // calls next to go to the next middleware
  sendDatabaseData: (req, res, next) => {
    // send back whats on the db
    const db = JSON.parse(fs.readFileSync(dbPath));
    res.locals.db = db;
    next();
  },

  // this will completely delete the database
  // calls next to hop on the next middleware
  deleteDatabaseData: (req, res, next) => {
    // delete the database
    fs.writeFileSync(dbPath, JSON.stringify({}, null, 2));
    next();
  },

  writeUserTextToDatabase: (req, res, next) => {
    res.locals.preso = req.body.text;
    next();
  },

  modifyUserTextToDatabase: (req, res, next) => {
    res.locals.preso = req.body.text + res.locals.db;
    console.log(res.locals.preso);
    next();
  }
};
