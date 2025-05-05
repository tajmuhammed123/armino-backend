const Weather = require("../models/Weather");

module.exports = {
  Query: {
    getWeather: async () => {
      const weatherData = await Weather.find({});
      if (!weatherData || weatherData.length === 0) {
        throw new Error("No weather data found.");
      }
      return weatherData;
    },
  },
};
