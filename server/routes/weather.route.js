const express = require('express');
const passport = require('passport');
const asyncHandler = require('express-async-handler');
const weatherCtrl = require('../controllers/weather.controller');
const userCtrl = require('../controllers/user.controller');
const httpError = require('http-errors');

const router = express.Router();
module.exports = router;

router.route('/').get(asyncHandler(getWeather));

async function getWeather(req, res, next) {
  let isApiKeyValid = await userCtrl.findUserWithApiKey(req.query.apiKey); // could potentially be changed to authenticate via middleware
  
  console.log(req.query.apiKey, isApiKeyValid)
  if(!isApiKeyValid){
    const err = new httpError(400);
    err.message = "API key is invalid"
    return next(err);
  }

  weatherCtrl.getWeather(req.query).then(weatherData => {
    res.json(weatherData);
  });
}
