const Joi = require('joi')

const joiSchema = Joi.object({
  name: Joi.string()
    .min(3).max(30)
    .pattern(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/)
    .required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.string()
    .max(15)
    .pattern(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/)
    .required(),
})

module.exports = joiSchema
