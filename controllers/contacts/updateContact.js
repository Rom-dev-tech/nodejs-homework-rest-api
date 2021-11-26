const contactsOperations = require('../../model/contacts')
const { sendSuccessRes, notFound } = require('../../helpers')

const updateContact = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperations.updateContact(contactId, req.body)

  if (!result) {
    return notFound(contactId, next)
  }

  sendSuccessRes(res, { result })
}

module.exports = updateContact
