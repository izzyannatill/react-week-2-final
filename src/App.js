import React from "react";
import Weather from "./Weather";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine!</h1>
      <WeatherSearch />
    </div>
  );
}