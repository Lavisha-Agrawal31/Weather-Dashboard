import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";
import SearchBar from "../components/SearchBar";
import HistoryList from "../components/HistoryList";
import { ThemeContext } from "../Context/ThemeContext";
import ForecastCard from "../components/ForecastCard";


const API_KEY = "47d1631f155fa9a88f60ef07f7073fde";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const WeatherDashboard = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [city, setCity] = useState("Delhi");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&units=metric`);
      const forecastResponse = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
);

      setWeather(response.data);
      console.log("Forecast Data:", forecastResponse.data);
      setForecast(forecastResponse.data.list); 
      updateHistory(cityName);
    } catch (err) {
      setError("City not found");
    }
    setLoading(false);
  };

  const updateHistory = (cityName) => {
    setHistory((prev) => [cityName, ...prev.filter((c) => c !== cityName)].slice(0, 5));
  };

  return (
    <div className={`min-h-screen p-6 flex flex-col items-center ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
  <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} theme={theme} setTheme={setTheme} />
  
  {loading && <div className="text-xl">Loading...</div>}
  {error && <div className="text-red-500">{error}</div>}
  
  <HistoryList history={history} fetchWeather={fetchWeather} />

  {weather && forecast.length > 0 && (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-6">
      <WeatherCard weather={weather} />
      <ForecastCard forecast={forecast} />
    </div>
  )}
</div>

  );
};

export default WeatherDashboard;
