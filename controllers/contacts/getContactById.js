const { Contact } = require('../../models')
const { NotFound } = require('http-errors')
const { sendSuccessRes } = require('../../utils')

const getContactById = async (req, res, next) => {
  const { contactId } = req.params
  const { _id } = req.user

  const result = await Contact.findById(contactId)
    .populate('owner', '_id email')

  if (!result || String(_id) !== String(result.owner._id)) {
    return next(new NotFound(`Contact with id=${contactId} not found`))
  }

  sendSuccessRes(res, { result })
}

module.exports = getContactById
