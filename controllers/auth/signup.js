const { User } = require('../../models')
const { conflict } = require('../../utils/httpErrors')
const { sendSuccessRes } = require('../../utils')

const signup = async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user) {
    return conflict(next)
  }
  const newUser = new User({ email })

  newUser.setPassword(password)

  await newUser.save()

  const ResponseBody = {
    user: {
      email,
      subscription: 'starter',
    },
  }

  sendSuccessRes(res, ResponseBody, 201)
}

module.exports = signup
