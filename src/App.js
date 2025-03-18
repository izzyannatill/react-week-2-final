import React from "react";
import WeatherSearch from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine!</h1>
      <WeatherSearch />
      <p>Created by Izzy on <a href="https://github.com/izzyannatill/react-week-2-final">Github</a></p>
    </div>
  );
}