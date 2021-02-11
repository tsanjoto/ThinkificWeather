const Joi = require('joi');
const config = require('../config/config');
const http = require('http');

const openWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';

module.exports = {
  getWeather
}

const weatherSchema = Joi.object({
  city: Joi.string().required(),
  apiKey: Joi.string().required(),
})

async function getWeather(weatherReq) {
  weatherReq = await Joi.validate(weatherReq, weatherSchema, { abortEarly: false });
  console.log('Getting weather for ' + weatherReq.city);
  var url = openWeatherUrl + weatherReq.city + '&appid=' + config.openWeatherApi;
  
  return new Promise((resolve, reject) => {
    http.get(url, function(res) {
      var body = '';
      res.on('data', function(chunk) {
        body += chunk;
      });
      res.on('end', function() {
        parsed = JSON.parse(body);
        resolve(parsed);
      });
    }).on('error', function(e) {
      reject(e.message);
    });
  });
}
