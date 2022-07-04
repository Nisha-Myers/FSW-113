// import the convertTemp.js and getDaylight.js scripts with their default export
import {localTemp} from "./convertTemp.js";
import {nightMode} from "./getDayight.js";

// declare any variables needed
const temp = document.querySelector("#tempData");
const humidity = document.querySelector("#humidData");
const conditions = document.querySelector("#conditionsData");

// create an event listener for the click of the goBttn that calls a function to fetch the weather data
document.querySelector("#goBttn").addEventListener("click", () => {
    queryAPI(document.getElementById("city").value);
});

// create a function that calls the function that queries the api 
// and then creates promises that will call a function to write the weather data to the HTML page        
function queryAPI(city) {
    fetchData(city);
    .then(function (err) {
        console.warn(err);
    })
}

// use an asynchronous call to fetches the current weather for the specified city, awaits it, 
// and returns the resulting data
const fetchData = async (city) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ec5288da72b5c836e63f1fc2231141c4`);
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city
function toLocal(data) {
    temp.innerText = localTemp(data.main.temp, data.sys.country);
    humidity.innerText = `${data.main.humidity}%`;
    conditions.innerText = data.weather[0].main;
    document.querySelector(".weatherWrapper").style.backgroundColor = nightMode(data);
}