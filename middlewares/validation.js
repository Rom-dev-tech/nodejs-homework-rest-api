const { badRequest } = require('../helpers')
const { contactsJoiSchema } = require('../models')

const validation = (requireFields = []) => {
  return async (req, _, next) => {
    const { error } = contactsJoiSchema(req.body, requireFields)

    if (error) {
      return badRequest(error, next)
    }
    next()
  }
}

module.exports = validation
