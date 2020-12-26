// defining date in dd.mm.yyyy form
let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = day + "." + month + "." + year;

// defining API url and key
let apiUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
let k = ",us&appid=b881ca4d0f76a58889e9aea0e56e2fca&units=metric";


