

import getWeatherData from "./getWeatherData.js"

const weather = document.getElementById("weather")
const getWeatherBtn = document.getElementById("getWeather")
const restartBtn = document.getElementById("clear")
const citylabel = document.getElementById("city")

getWeatherBtn.addEventListener('click', getWeatherData);


restartBtn.addEventListener("click", () => {
    weather.innerHTML = "Click button to get Weather";
    citylabel.innerHTML = "";
    document.getElementById("zipcode").value = ""; // Corrected to clear the input field
});

