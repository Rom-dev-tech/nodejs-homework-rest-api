const { NotFound } = require('http-errors')
const { User } = require('../../models')
const { sendSuccessRes } = require('../../utils')

const verify = async (req, res, next) => {
  const { verificationToken } = req.params

  const user = await User.findOne({ verificationToken })

  if (!user) {
    return next(new NotFound('User not found'))
  }

  await User.findByIdAndUpdate(user._id, { verificationToken: null, verify: true })

  sendSuccessRes(res, { message: 'Verification successful' })
}

module.exports = verify