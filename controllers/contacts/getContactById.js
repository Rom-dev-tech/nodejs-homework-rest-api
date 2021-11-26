const contactsOperations = require('../../model/contacts')
const { sendSuccessRes, notFound } = require('../../helpers')

const getContactById = async (req, res, next) => {
  const { contactId } = req.params
  const result = await contactsOperations.getContactById(contactId)

  if (!result) {
    return notFound(contactId, next)
  }

  sendSuccessRes(res, { result })
}

module.exports = getContactById
