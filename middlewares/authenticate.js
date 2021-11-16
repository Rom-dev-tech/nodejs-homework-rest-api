const { unauthorized } = require('../utils')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

const { SECRET_KEY } = process.env

const authenticate = async (req, res, next) => {
  try {
    const [bearer, token] = req.headers.authorization.split(' ')
    if (bearer !== 'Bearer') {
      return unauthorized('Not authorized', next)
    }
    try {
      const { id } = jwt.verify(token, SECRET_KEY)
      const user = await User.findById(id)
      if (!user || !user.token) {
        return unauthorized('Not authorized', next)
      }

      req.user = user

      next()
    } catch (error) {
      return unauthorized('Not authorized', next)
    }
  } catch (error) {
    next(error)
  }
}

module.exports = authenticate
