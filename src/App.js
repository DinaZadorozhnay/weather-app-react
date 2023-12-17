import "./App.css";
import React, { useState } from "react";
import axios from "axios";

import CurrentWeatherDetails from "./CurrentWeatherDetails";
import ForecastTable from "./ForecastTable";

function App() {
  let [city, setCity] = useState("Berlin");
  let [weather, setWeather] = useState({});

  function changeCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function displayWeather(response) {
    console.log(response.data);
    setWeather({
      temperature: response.data.main.temp,
      temperatureMax: response.data.main.temp_max,
      temperatureMin: response.data.main.temp_min,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  function updateWeather(event) {
    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  return (
    <div className="App" onLoad={updateWeather}>
      <div className="block-weather">
        <div className="weather-header">
          <div className="city">
            <ul className="topCities">
              <li>Lisbon</li>
              <li>Paris</li>
              <li>Sydney</li>
              <li>San Francisco</li>
            </ul>
            <div className="form-group">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  name="city"
                  placeholder="Enter a city..."
                  autocomplete="off"
                  autofocus
                  className="searchInput"
                  onChange={changeCity}
                />
                <input type="submit" value="Search" className="searchButton" />
              </form>
              <button className="currentButton">Current</button>
            </div>

            <div>
              <h1 className="currentCity">{city}</h1>
              <h3>
                <span>Thursday, 15:33</span>
              </h3>
            </div>
          </div>
          <div className="currentIcon">
            <img src={weather.icon} alt="" />
          </div>
          <div className="currentWeatherDetails">
            <CurrentWeatherDetails
              temperature={Math.round(weather.temperature)}
              wind={Math.round(weather.wind)}
              humidity={weather.humidity}
              description={weather.description}
              temperatureMax={Math.round(weather.temperatureMax)}
              temperatureMin={Math.round(weather.temperatureMin)}
            />
          </div>
        </div>
        <ForecastTable
          icon={weather.icon}
          temperature={Math.round(weather.temperature)}
          wind={Math.round(weather.wind)}
          humidity={weather.humidity}
          description={weather.description}
          temperatureMax={Math.round(weather.temperatureMax)}
          temperatureMin={Math.round(weather.temperatureMin)}
        />
      </div>
    </div>
  );
}

export default App;
