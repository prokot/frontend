import React, { useState } from 'react';
import getWeather from '../WeatherApi.js';
import WeatherInfo from './WeatherInfo';
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
        {weather && <WeatherInfo city={city} weather={weather} />}
      </div>
    </div>
  );
};

export default Weather;