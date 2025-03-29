import React from "react";
import { ThemeProvider } from "./Context/ThemeContext";
import WeatherDashboard from "./pages/WeatherDashboard";

function App() {
  return (
    <ThemeProvider>
      <WeatherDashboard />
    </ThemeProvider>
  );
}

export default App;