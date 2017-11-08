const request = require('request');

var getWeather = (lat,lng, callback) => {
request({
  url: `https://api.darksky.net/forecast/1c364bf7a742366094b968004d7c6d28/${lat},${lng}`,
  json: true
}, (error, response, body) => {
   if (!error && response.statusCode === 200){
  callback(undefined, {
    temperature: body.currently.temperature,
    apparentTemperature: body.currently.apparentTemperature
  });
  
} else{
  callback('Unable to fetch weather');
}
});
};

module.exports.getWeather = getWeather;
