const { NotFound } = require('http-errors')

const notFound = (contactId) => {
  throw new NotFound(`Contact with id=${contactId} not found`)
}

module.exports = {
  notFound
}
