import { createRoot } from "react-dom/client";
import Weather from "./Weather";
import React from 'react';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <h1>Weather App</h1>
      <Weather />
    </div>
  </StrictMode>
);
