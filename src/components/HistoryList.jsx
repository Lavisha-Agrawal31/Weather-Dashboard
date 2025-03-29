import React from "react";

const HistoryList = ({ history, fetchWeather }) => {
  return (
    history.length > 0 && (
      <div className="mt-1">
        <h3 className="text-lg font-semibold">Recent Searches</h3>
        <div className="flex gap-2 mt-2">
          {history.map((h, index) => (
            <button key={index} onClick={() => fetchWeather(h)} className="p-2 bg-gray-300 text-black rounded-lg">
              {h}
            </button>
          ))}
        </div>
      </div>
    )
  );
};

export default HistoryList;