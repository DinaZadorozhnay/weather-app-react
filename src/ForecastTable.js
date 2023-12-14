import React from "react";

export default function ForecastTable() {
  return (
    <div className="table">
      <div className="tableWrapper">
        <div class="col weatherTable">
          <div class="day">Fri</div>
          <img src="" class="tableIMG" alt="" width="50px" />

          <div class="labels">
            <span class="label">
              MIN <span>10</span>
            </span>
            <span class="label">
              MAX <span>20</span>
            </span>
          </div>
          <ul class="weatherDetails">
            <li class="description">windy</li>
            <li>
              Wind <span class="wind">5</span> m/s
            </li>
            <li>
              Humidity <span class="humidity">68</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
