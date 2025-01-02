import axios from 'axios';

const getWeather = async (city) => {
  const apiKey = '2c8b6357b9cf6f76f793f148a6771660';
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = response.data;
  return {
    condition: data.weather[0].main,
    temperature: data.main.temp,
    time: new Date((data.dt + data.timezone) * 1000).toLocaleTimeString(),
    icon: data.weather[0].icon, // Add the icon property
  };
};

export default getWeather;