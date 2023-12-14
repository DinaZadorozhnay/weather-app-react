import React from "react";

export default function CurrentWeatherDetails() {
  return (
    <div>
      <div className="currentWeather">
        <span id="currentTemp" className="currentTemp">
          +11
        </span>

        <div className="measures">
          <span className="currentMeasure">°C</span>
        </div>
      </div>
      <div className="labels">
        <span className="label">
          MIN <span id="today-min">+10</span>
        </span>
        <span className="label">
          MAX <span id="today-max">+12</span>
        </span>
      </div>
      <ul className="weatherDetails">
        <li id="today-description" className="description">
          Clear Sky
        </li>
        <li>
          Wind <span id="today-wind">6</span> m/s
        </li>
        <li>
          Humidity <span id="today-humidity">48</span>%
        </li>
      </ul>
    </div>
  );
}
