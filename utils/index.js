const sendSuccessRes = require('./sendSuccessRes')
const { notFound, badRequest, conflict } = require('./httpErrors')

module.exports = {
  sendSuccessRes,
  notFound,
  badRequest,
  conflict,
}
