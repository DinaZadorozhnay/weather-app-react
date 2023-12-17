import React from "react";

export default function ForecastTable(props) {
  return (
    <div className="table">
      <div className="tableWrapper">
        <div className="col weatherTable">
          <div className="day">Fri</div>
          <img src={props.icon} className="tableIMG" alt="" width="50px" />

          <div className="labels">
            <span className="label">
              MIN <span>{props.temperatureMin}</span>
            </span>
            <span className="label">
              MAX <span>{props.temperatureMax}</span>
            </span>
          </div>
          <ul className="weatherDetails">
            <li className="description">{props.description}</li>
            <li>
              Wind <span className="wind">{props.wind}</span> m/s
            </li>
            <li>
              Humidity <span className="humidity">{props.humidity}</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
