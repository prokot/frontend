import React from 'react';

const WeatherInfo = ({ city, weather }) => {
  return (
    <div>
      <h3>Weather in {city}</h3>
      <p>Condition: {weather.condition}</p>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Local Time: {weather.time}</p>
      <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.condition} />
    </div>
  );
};

export default WeatherInfo;