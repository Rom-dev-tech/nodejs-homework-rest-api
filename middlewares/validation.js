const { badRequest } = require('../utils')

const validation = (joiSchema, requireFields = []) => {
  return async (req, _, next) => {
    const { error } = joiSchema(req.body, requireFields)

    if (error) {
      return badRequest(error, next)
    }
    next()
  }
}

module.exports = validation
