const { Contact } = require('../../models')
const { sendSuccessRes, notFound } = require('../../utils')

const updateContact = async (req, res, next) => {
  const { contactId } = req.params
  const result = await Contact.findByIdAndUpdate(contactId, req.body, { new: true })

  if (!result) {
    return notFound(contactId, next)
  }

  sendSuccessRes(res, { result })
}

module.exports = updateContact
