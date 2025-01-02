import React, { useState } from 'react';
import getWeather from '../WeatherApi.js';
import '../styles/Weather.css';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const weatherInfo = await getWeather(city);
    setWeather(weatherInfo);
  };

  return (
    <div className="weather-container">
      <div className="weather-box">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
          />
          <button type="submit">Get Weather</button>
        </form>
        {weather && (
          <div>
            <h3>Weather in {city}</h3>
            <p>Condition: {weather.condition}</p>
            <p>Temperature: {weather.temperature}°C</p>
            <p>Local Time: {weather.time}</p>
            <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={weather.condition} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;