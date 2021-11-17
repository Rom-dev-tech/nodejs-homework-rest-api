const { Contact } = require('../../models')
const { sendSuccessRes, notFound } = require('../../utils')

const getContactById = async (req, res, next) => {
  const { contactId } = req.params
  const { email } = req.user

  const result = await Contact.findById(contactId)
    .populate('owner', '_id email')

  if (!result || email !== result.owner.email) {
    return notFound(contactId, next)
  }

  sendSuccessRes(res, { result })
}

module.exports = getContactById
