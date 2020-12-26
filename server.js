//JS object to hold all routes
myData = {};

//Initializing server configs
// install Express
const express = require("express");
// making an app instance
const myapp = express();

//configuring bodyParser as middle-ware
const body_parser = require("body-parser");
myapp.use(body_parser.urlencoded({ extended: false }));
myapp.use(body_parser.json());

// and Cors to allow cross origin
const cors = require("cors");
myapp.use(cors());

// define project folder
myapp.use(express.static("website"));

// Setting up the server
const port = 5000;
const server = myapp.listen(port, () => {
  console.log(`Hi, we're running on localhost: ${port}`);
});

//defining home page url
myapp.get("/", function (req, res) {
    res.send("index.html");
  });

  //defining get data url
  myapp.get("/myData", getmyData);
function getmyData(req, res) {
  res.send(myData);
  console.log(myData);
}

