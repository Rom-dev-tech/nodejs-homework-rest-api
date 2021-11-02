const { NotFound } = require('http-errors')

const notFound = (contactId, next) => {
  next(new NotFound(`objact with id=${contactId} not found`))
}

module.exports = {
  notFound,
}
