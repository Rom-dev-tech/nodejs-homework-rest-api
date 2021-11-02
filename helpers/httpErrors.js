const { NotFound } = require('http-errors')

const notFound = (contactId, next) => {
  next(new NotFound(`object with id=${contactId} not found`))
}

module.exports = {
  notFound,
}
