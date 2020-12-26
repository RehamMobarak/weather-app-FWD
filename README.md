# Weather-Journal App Project

## Overview
In This project requires I created an asynchronous web app that uses data from a Web API and user input data to dynamically update the User interface with city's weather data.

## Instructions
- First, you must install dependencies (expressjs, cors, body-parser).
    * npm install express
    * npm install cors
    * npm install  body-parser

- Require dependencies in server.js.
 * const express = require("express");

- Start an instance of express.
 * const myapp = express();

- Configure express to use cors.
 * const cors = require("cors");
 * myapp.use(cors());

- Configure bodyParser as middle-ware
  * const body_parser = require("body-parser");
  * myapp.use(body_parser.urlencoded({ extended: false }));
  * myapp.use(body_parser.json());

- Define project folder name
 * myapp.use(express.static("your-project-folder-name"));

- Server setup (port, listen to port) from terminal.
 * const port = 5000;
 * const server = myapp.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});
- To run the server In terminal write ' node server.js '
- In browser write localhost:portnumber (replace port number with the port number you wrote in server.js)

## Features
* generateButton function takes zip code from user input and sends a GET request to get city's weather
* A GET route that returns project's data to the myData object in server code
* getData function fetches weather data from the API
* A POST route that adds incoming data to myData object.
* dataPost function that posts user feelings input which we will get it with request coming from the api.
* A Promise -using then-that makes a POST request to add the API data, as well as data entered by the user, to the app.
* Another Promise that updates the UI dynamically.
* update function that shows most recent entry data on the page.
* Error handling with try { } catch { }
* Debugging using console.log().