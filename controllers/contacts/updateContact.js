const { Contact } = require('../../models')
const { sendSuccessRes, notFound } = require('../../utils')
const { authenticateContact } = require('../../middlewares')

const updateContact = async (req, res, next) => {
  const { contactId } = req.params
  const { email } = req.user

  const validateUser = await authenticateContact(contactId, email)

  if (!validateUser) {
    return notFound(contactId, next)
  }

  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  }).populate('owner', '_id email')

  sendSuccessRes(res, { result })
}

module.exports = updateContact
