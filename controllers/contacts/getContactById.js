const { Contact } = require('../../models')
const { sendSuccessRes, notFound } = require('../../helpers')

const getContactById = async (req, res, next) => {
  const { contactId } = req.params
  const result = await Contact.findById(contactId)

  if (!result) {
    return notFound(contactId, next)
  }

  sendSuccessRes(res, { result })
}

module.exports = getContactById
