const { Conflict } = require('http-errors')
const { User } = require('../../models')
const { sendSuccessRes } = require('../../utils')

const signup = async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user) {
    return next(new Conflict('Email in use'))
  }
  const newUser = new User({ email })

  newUser.setPassword(password)

  await newUser.save()

  const ResponseBody = { user: { email, subscription: 'starter' } }

  sendSuccessRes(res, ResponseBody, 201)
}

module.exports = signup
