const { Contact } = require('../../models')
const { sendSuccessRes, notFound } = require('../../utils')

const removeContact = async (req, res, next) => {
  const { contactId } = req.params
  const result = await Contact.findByIdAndRemove(contactId)

  if (!result) {
    return notFound(contactId, next)
  }

  sendSuccessRes(res, { message: 'contact deleted' })
}

module.exports = removeContact
