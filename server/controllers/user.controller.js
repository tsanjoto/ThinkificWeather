const bcrypt = require('bcrypt');
const Joi = require('joi');
const uuidAPIKey = require('uuid-apikey');
const User = require('../models/user.model');

const userSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().required(),
  repeatPassword: Joi.string().required().valid(Joi.ref('password'))
})


module.exports = {
  insert,
  checkForExistingUser,
  findUserWithApiKey
}

async function insert(user) {
  user = await Joi.validate(user, userSchema, { abortEarly: false });
  user.hashedPassword = bcrypt.hashSync(user.password, 10);
  delete user.password;
  user.apiKey = uuidAPIKey.create({ 'noDashes': true }).apiKey;
  return await new User(user).save();
}

async function checkForExistingUser(email){
  return await User.findOne({email:email});
}

async function findUserWithApiKey(apiKey){
  //console.log(apiKey)
  return await User.findOne({apiKey:apiKey});
}
