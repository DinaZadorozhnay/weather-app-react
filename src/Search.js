import React from "react";

export default function Search() {
  return (
    <div>
      <ul className="topCities">
        <li>Lisbon</li>
        <li>Paris</li>
        <li>Sydney</li>
        <li>San Francisco</li>
      </ul>
      <div className="form-group">
        <form>
          <input
            type="search"
            name="city"
            placeholder="Enter a city..."
            autocomplete="off"
            autofocus
            className="searchInput"
          />
          <input type="submit" value="Search" className="searchButton" />
        </form>
        <button className="currentButton">Current</button>
      </div>
    </div>
  );
}
