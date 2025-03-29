import React from "react";

const ForecastCard = ({ forecast }) => {
  if (!forecast || forecast.length === 0) {
    return <div className="text-center p-4">No forecast data available</div>;
  }

  const dailyForecast = forecast.reduce((acc, data) => {
    const date = data.dt_txt.split(" ")[0]; 
    if (!acc[date]) acc[date] = [];
    acc[date].push(data);
    return acc;
  }, {});

  return (
    <div className="w-full max-w-md bg-gray-100 dark:bg-gradient-to-br from-blue-400 to-blue-700 p-4 rounded-lg shadow-lg mt-6">
      <h2 className="text-lg font-semibold mb-3 text-center">5-Day Forecast</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {Object.keys(dailyForecast).slice(0, 5).map((date, index) => {
          const dailyData = dailyForecast[date][0]; 
          return (
            <div key={index} className="bg-white dark:bg-gray-600  rounded-lg shadow w-full h-37">
              <p className="text-center font-medium">{date}</p>
              <p className="text-center text-lg">{Math.round(dailyData.main.temp)}°C</p>
              <img
                className="mx-auto"
                src={`https://openweathermap.org/img/wn/${dailyData.weather[0].icon}.png`}
                alt={dailyData.weather[0].description}
              />
              <p className="text-center">{dailyData.weather[0].description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ForecastCard;
