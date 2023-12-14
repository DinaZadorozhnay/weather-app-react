import "./App.css";
import Search from "./Search";
import CurrentWeatherDetails from "./CurrentWeatherDetails";
import ForecastTable from "./ForecastTable";

function App() {
  return (
    <div className="App">
      <div className="block-weather">
        <div className="weather-header">
          <div className="city">
            <Search />
            <div>
              <h1 className="currentCity">New York</h1>
              <h3>
                <span>Thursday, 15:33</span>
              </h3>
            </div>
          </div>
          <div className="currentWeatherDetails">
            <CurrentWeatherDetails />
          </div>
        </div>
        <ForecastTable />
      </div>
    </div>
  );
}

export default App;
