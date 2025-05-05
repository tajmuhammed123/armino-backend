const axios = require("axios");
require("dotenv").config();

const fetchWeatherData = async (city) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY;
    if (!apiKey) {
      throw new Error("Error fetching");
    }

    const url = ``;
    const response = await axios.get(url);
    const data = response.data;

    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      date: new Date().toISOString().split("T")[0],
      feels_like: data.main.feels_like,
      sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
      humidity: data.main.humidity,
      wind_speed: data.wind.speed,
    };
  } catch (error) {
      throw new Error(`Failed to fetch weather data: ${error.message}`);
  }
};

module.exports = fetchWeatherData;
