const { Contact } = require('../../models')
const { sendSuccessRes, notFound } = require('../../utils')

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params
  const { favorite } = req.body
  const { email } = req.user

  const validation = await Contact.findById(contactId).populate(
    'owner',
    '_id email'
  )

  if (!validation || email !== validation.owner.email) {
    return notFound(contactId, next)
  }

  const result = await Contact.findByIdAndUpdate(contactId, { favorite }, {
    new: true,
  }).populate(
    'owner',
    '_id email'
  )

  if (!result) {
    return notFound(contactId, next)
  }

  sendSuccessRes(res, { result })
}

module.exports = updateStatusContact
