const express = require("express");
const bodyParser = require("body-parser");
const initMongo = require("./config/mongo");
const cors = require("cors");
const app = express();

// Setup express server port from ENV, default: 5000
app.set("port", process.env.PORT || 5000);

// for parsing json
app.use(
  bodyParser.json({
    limit: "50mb",
  })
);

// for parsing application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

// Init all other stuff
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// eslint-disable-next-line
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Init MongoDB
initMongo();

app.get('/')




module.exports = app; // for testing
