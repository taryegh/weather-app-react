import React from "react";

function Weather(props) {
  return (
    <div className="weather">
      {props.city && props.country && (
        <h1>
          {props.city}, {props.country}{" "}
        </h1>
      )}

      {props.temperature && <h2>Temperature: {props.temperature} celsius</h2>}

      {props.humidity && <h2>Humidity: {props.humidity} %</h2>}

      {props.description && <h2>{props.description}</h2>}

      {props.maxTemp && <h3>Min Temp: {props.minTemp} celsius</h3>}

      {props.minTemp && <h3>Max Temp: {props.maxTemp} celsius</h3>}

      {props.error && <h2>{props.error}</h2>}
    </div>
  );
}

export default Weather;
