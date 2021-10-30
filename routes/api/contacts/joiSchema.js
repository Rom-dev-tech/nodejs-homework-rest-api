const Joi = require('joi')

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().max(15).required(),
})

module.exports = joiSchema
