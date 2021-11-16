const jwt = require('jsonwebtoken')
const { User } = require('../../models')
const { unauthorized, sendSuccessRes } = require('../../utils')

const { SECRET_KEY } = process.env

const signin = async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (!user || !user.comparePassword(password)) {
    return unauthorized('Email or password is wrong', next)
  }

  const payload = {
    id: user._id
  }

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '12h' })
  await User.findByIdAndUpdate(user._id, { token })

  const ResponseBody = {
    token,
    user: {
      email,
      subscription: 'starter',
    },
  }

  sendSuccessRes(res, ResponseBody)
}

module.exports = signin
