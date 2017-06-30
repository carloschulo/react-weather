import axios from 'axios';

//TODO: hide api key LOL 😏
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4b521f0c7ebfadf46d050e4c016676a2&units=imperial';

export const fetchWeather = (location) => {
  const encodedLocation = encodeURIComponent(location);
  const encodedURI = window.encodeURI(`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`)

  return axios.get(encodedURI)
    .then(response => response.data)
    .catch(err => console.error('ERRORR HERER', err))
}