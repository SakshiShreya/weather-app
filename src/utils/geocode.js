const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    address +
    '.json?limit=1&access_token=pk.eyJ1Ijoic2hyZXlhc2Frc2hpOTYiLCJhIjoiY2p2Nmc0N29qMDRqcjRlbWNhbXJhbXFtaiJ9.rdnVXpwKIxEXIe46N7i3XQ';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to Location Service', undefined);
    } else if (body.features.length == 0) {
      callback('Unable to find loaction. Try another search.', undefined);
    } else {
      callback(undefined, {
        lat: body.features[0].center[1],
        long: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
