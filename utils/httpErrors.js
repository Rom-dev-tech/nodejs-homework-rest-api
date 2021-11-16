const { NotFound, BadRequest, Conflict, Unauthorized } = require('http-errors')

const notFound = (contactId, next) => {
  next(new NotFound(`object with id=${contactId} not found`))
}

const badRequest = (error, next) => {
  next(new BadRequest(error.message))
}

const conflict = (next) => {
  next(new Conflict('Email in use'))
}

const unauthorized = (message, next) => {
  next(new Unauthorized(message))
}

module.exports = {
  notFound,
  badRequest,
  conflict,
  unauthorized
}
