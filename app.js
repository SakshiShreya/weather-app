const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

if (process.argv.length === 3) {
  geocode(process.argv[2], (error, {lat, long, location}) => {
    if (error) {
      return console.log(error);
    }

    forecast(lat, long, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(location);
      console.log(forecastData);
    });
  });
} else {
  console.log('please provide an address');
}
