const sendSuccessRes = require('./sendSuccessRes')
const {
  notFound,
  badRequest,
  conflict,
  unauthorized
} = require('./httpErrors')

module.exports = {
  sendSuccessRes,
  notFound,
  badRequest,
  conflict,
  unauthorized
}
