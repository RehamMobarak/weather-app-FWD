// defining date in dd.mm.yyyy form
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = day + "." + month + "." + year;

// defining API url and key
let apiUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
let k = ",us&appid=b881ca4d0f76a58889e9aea0e56e2fca&units=metric";

//make an event listener on the button -click- to call functions that GET data from the api, add user feelings and POST it then show it in Most recent entry section on the page

const btn = document.getElementById("generate");
btn.addEventListener("click", generateButton);

// Function for getting data from the weather API
const getData = async (apiUrl, zCode, k) => {
  const response = await fetch(apiUrl + zCode + k);
  try {
    const fetchedData = await response.json();
    if (fetchedData.message == undefined) {
      console.log(fetchedData);
      return fetchedData;
    } else {
      alert(fetchedData.message);
    }
  } catch (error) {
    console.log("Sorry, there is an error..!", error);
  }
};

//what to do after clicking generate button
//take country zip code from input to make a request with it and GET weather data from the api
//zip code examples:94040,85005
//then take user feelings from the input and POST it with the request
function generateButton(e) {
  const zCode = document.getElementById("zip").value;
  const userFeelings = document.getElementById("feelings").value;
  // check if zip code is empty
  if (zCode == "") {
    alert("YOU MUST ENTER ZIPCODE!");
  }

  // check if  user Feelings is empty
  if (userFeelings == "") {
    alert("YOU MUST ENTER FEELINGS!");
  }

  // if zip code and feelings are not empty -> get the data from the api
  if (zCode && userFeelings !== "") {
    getData(apiUrl, zCode, k).then((fetchedData) => {
      dataPOST("/addProjectData", {
        temperature: fetchedData.main.temp,
        date: currentDate,
        userContent: userFeelings,
        name: fetchedData.name,
        windSpeed: fetchedData.wind.speed,
      }).then(() => {
        update();
      });
    });
  }
}

//POST desired fetched data parts which we got from the api GET request with user response -feelings- input
const dataPOST = async (url = "", feelingInput = {}) => {
  // console.log(feelingInput);
  const res = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // Body data type must match "Content-Type" header
    body: JSON.stringify(feelingInput),
  });

  try {
    const newEntry = await res.json();
    //   console.log(newEntry);
    return newEntry;
  } catch (error) {
    console.log("error", error);
  }
};

//UPDATE the page with the new data that includes fetched data from the api - temp - and user input - feelings - and date -generated instantly-
const update = async () => {
  const request = await fetch("/myData");
  try {
    const result = await request.json();
    //   console.log(result);
    const UIdate = document.getElementById("date");
    UIdate.innerHTML = "Date: " + result.date;

    const UItemp = document.getElementById("temp");
    UItemp.innerHTML = "Temperature: " + result.temperature;

    const UIfeel = document.getElementById("content");
    UIfeel.innerHTML = "Your Feeling: " + result.userContent;

    const UIcityName = document.getElementById("cityName");
    UIcityName.innerHTML = "City Name: " + result.name;

    const UIwindSpeed = document.getElementById("windSpeed");
    UIwindSpeed.innerHTML = "Wind Speed: " + result.windSpeed;

    //emptying inputs after submit
    document.getElementById("zip").value = "";

    document.getElementById("feelings").value = "";
  } catch (error) {
    console.log("Sorry, it's an error..!", error);
  }
};
