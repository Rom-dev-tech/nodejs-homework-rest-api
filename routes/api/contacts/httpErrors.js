const { NotFound, BadRequest } = require('http-errors')

const notFound = (contactId) => {
  throw new NotFound(`Contact with id=${contactId} not found`)
}

const badRequest = (error) => {
  throw new BadRequest(error.message)
}

module.exports = {
  notFound,
  badRequest,
}
