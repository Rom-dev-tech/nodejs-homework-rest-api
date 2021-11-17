const { Contact } = require('../../models')
const { sendSuccessRes, notFound } = require('../../utils')
const { authenticateContact } = require('../../middlewares')

const removeContact = async (req, res, next) => {
  const { contactId } = req.params
  const { email } = req.user

  const validationUser = await authenticateContact(contactId, email)

  if (!validationUser) {
    return notFound(contactId, next)
  }

  const result = await Contact.findByIdAndRemove(contactId)
    .populate('owner', '_id email')

  const { _id, owner } = result

  sendSuccessRes(res, { message: 'contact deleted', delete_id: _id, owner })
}

module.exports = removeContact
