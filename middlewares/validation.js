const { badRequest } = require('../helpers')

const validation = (schema) => {
  return async (req, _, next) => {
    const { error } = schema.validate(req.body)

    if (error) {
      return badRequest(error, next)
    }
    next()
  }
}

module.exports = validation
