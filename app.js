const request = require('request');

const url =
  'https://api.darksky.net/forecast/e84ca7c006fd6c1e0e61bebe3c3d41de/37.8267,-122.4233';

  request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data.currently);
  })