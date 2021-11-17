const { Contact } = require('../../models')
const { sendSuccessRes, notFound } = require('../../utils')

const updateContact = async (req, res, next) => {
  const { contactId } = req.params
  const { email } = req.user

  const validation = await Contact.findById(contactId).populate(
    'owner',
    '_id email'
  )

  if (!validation || email !== validation.owner.email) {
    return notFound(contactId, next)
  }

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  }).populate('owner', '_id email')

  sendSuccessRes(res, { result })
}

module.exports = updateContact
