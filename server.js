//JS object to hold all routes
projectData = {};

//Initializing server configs
// install Express
const express = require("express");
// making an app instance
const app = express();

//configuring bodyParser as middle-ware
const body_parser = require("body-parser");
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

// and Cors to allow cross origin
const cors = require("cors");
app.use(cors());

// define project folder
app.use(express.static("website"));

// Setting up the server
const port = 5000;
const server = app.listen(port, () => {
  console.log(`Hi, we're running on localhost: ${port}`);
});

