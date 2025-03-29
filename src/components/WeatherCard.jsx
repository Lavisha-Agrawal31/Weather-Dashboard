import React from "react";

const WeatherCard = ({ weather }) => {
  return (
    <div className="bg-gradient-to-br from-blue-400 to-blue-700 text-white p-6 rounded-2xl shadow-2xl text-center mt-6">
      <h2 className="text-3xl font-bold drop-shadow-md">{weather.name}</h2>
      <p className="text-lg capitalize opacity-90 mt-1">{weather.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="weather-icon"
        className="mx-auto w-24 h-24 drop-shadow-lg"
      />
      <p className="text-5xl font-extrabold mt-2 drop-shadow-md">{weather.main.temp}°C</p>
      <div className="flex justify-between items-center mt-6 px-5 text-sm bg-blue bg-opacity-20 rounded-lg py-2">
        <p className="flex flex-col items-center">
          <span className="font-semibold">Humidity</span>
          <span className="text-lg font-medium">{weather.main.humidity}%</span>
        </p>
        <p className="flex flex-col items-center">
          <span className="font-semibold">Wind</span>
          <span className="text-lg font-medium">{weather.wind.speed} km/h</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherCard;
