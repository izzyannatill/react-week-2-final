import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import Weather from "./Weather";

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
