const { Contact } = require('../../models')
const { sendSuccessRes, notFound } = require('../../utils')
const { authenticateContact } = require('../../middlewares')

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params
  const { favorite } = req.body
  const { email } = req.user

  const validationUser = await authenticateContact(contactId, email)

  if (!validationUser) {
    return notFound(contactId, next)
  }

  const result = await Contact.findByIdAndUpdate(contactId, { favorite },
    { new: true, })
    .populate('owner', '_id email')

  sendSuccessRes(res, { result })
}

module.exports = updateStatusContact
