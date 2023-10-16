import API_KEY from "./config.js"
import convertTime from "./convertTime.js"

async function getWeatherData() {
    const zipcode = document.getElementById("zipcode").value;

    if (/^\d+$/.test(zipcode)) {
        try {
            const geoURL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=${API_KEY}`;
            const geoResponse = await fetch(geoURL);
            const geoData = await geoResponse.json();
            const { name: city, lat, lon } = geoData;

            citylabel.innerHTML = `City: <br />${city}`;

            const weatherURL = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;

            const weatherResponse = await fetch(weatherURL);
            const weatherData = await weatherResponse.json();
            const { temp, sunrise, sunset, feels_like: feelsLike, humidity } = weatherData.current;

            weather.innerHTML = `
                <ul>
                    <li>Current temp: ${temp}°</li>
                    <li>Sunrise: ${convertTime(sunrise)}</li>
                    <li>Sunset: ${convertTime(sunset)}</li>
                    <li>Real Feel: ${feelsLike}°</li>
                    <li>Humidity ${humidity}</li>
                </ul`;

            document.getElementById("zipcode").value = "";
        } catch (error) {
            console.log(error);
        }
    }
}

export default getWeatherData