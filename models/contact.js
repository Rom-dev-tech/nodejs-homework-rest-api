const { Schema, model } = require('mongoose')
const Joi = require('joi')

const patternName =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/

const patternPhone =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/

const contactSchema = Schema(
  {
    name: {
      type: String,
      match: patternName,
      require: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      match: patternPhone,
      require: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
)

const contactsJoiSchema = Joi.object({
  name: Joi.string().max(30).pattern(patternName).required(),
  email: Joi.string().email({ minDomainSegments: 2 }).required(),
  phone: Joi.string().max(15).pattern(patternPhone).required(),
  favorite: Joi.boolean()
})

const Contact = model('contact', contactSchema)

module.exports = {
  Contact,
  contactsJoiSchema
}
