import React from "react";

export default function CurrentWeatherDetails(props) {
  return (
    <div>
      <div className="currentWeather">
        <span className="currentTemp">{props.temperature}</span>

        <div className="measures">
          <span className="currentMeasure">°C</span>
        </div>
      </div>
      <div className="labels">
        <span className="label">
          MIN <span id="today-min">{props.temperatureMin}</span>
        </span>
        <span className="label">
          MAX <span id="today-max">{props.temperatureMax}</span>
        </span>
      </div>
      <ul className="weatherDetails">
        <li className="description">{props.description}</li>
        <li>
          Wind <span>{props.wind}</span> m/s
        </li>
        <li>
          Humidity <span>{props.humidity}</span>%
        </li>
      </ul>
    </div>
  );
}
