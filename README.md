# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI.

## Instructions
- First, you must install dependensies (expressjs, cors, body-parser).
- Require dependensies in server.js.
- Start an instance of express.
- Configure express to use cors.
- Server setup (port, listen to port) from terminal.
- To run the server In terminal write ' node server.js '
- In browser write localhost:portnumber (replace port number with the port number you wrote in server.js)

## Features
* A GET route that returns project's data to the myData object in server code
* A POST route that adds incoming data to myData object.
* A Promise -using then-that makes a POST request to add the API data, as well as data entered by the user, to the app.
* Another Promise that updates the UI dynamically.
* Error handling with try { } catch { }
* Debugging using console.log().