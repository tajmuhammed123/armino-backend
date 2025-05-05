const { gql } = require("apollo-server");

module.exports = gql`
  type Weather {
    city: String
    temperature: Float
    description: String
    icon: String
    date: String
    feels_like: Float
    sunset: String
    humidity: Int
    wind_speed: Float
  }

  type Query {
    getWeather: [Weather]
    getWeatherHistory(city: String!, from: String!, to: String!): [Weather]
  }
`;
