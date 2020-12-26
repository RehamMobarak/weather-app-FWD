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

//zip code examples:94040,85005
const btn = document.getElementById("generate");
btn.addEventListener("click", generateBtn);

// Function for getting data from the weather API
const getData = async (apiUrl, zCode, k) => {
    const response = await fetch(apiUrl + zCode + k);
    try {
      const fetchedData = await response.json();
      console.log(fetchedData);
      return fetchedData;
    } catch (error) {
      console.log("Sorry, there is an error..!", error);
    }
  };

