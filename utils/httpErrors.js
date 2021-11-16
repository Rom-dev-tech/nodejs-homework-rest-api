const { NotFound, BadRequest, Conflict } = require('http-errors')

const notFound = (contactId, next) => {
  next(new NotFound(`object with id=${contactId} not found`))
}

const badRequest = (error, next) => {
  next(new BadRequest(error.message))
}

const conflict = (next) => {
  next(new Conflict('Email in use'))
}

module.exports = {
  notFound,
  badRequest,
  conflict
}
