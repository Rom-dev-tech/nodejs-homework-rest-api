const { NotFound } = require('http-errors')
const { Contact } = require('../../models')
const { sendSuccessRes } = require('../../utils')

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params
  const { favorite } = req.body
  const { _id } = req.user

  const checkContact = await Contact.findById(contactId)

  if (!checkContact || String(_id) !== String(checkContact.owner._id)) {
    return next(new NotFound(`Contact with id=${contactId} not found`))
  }

  const result = await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true })
    .populate('owner', '_id email')

  sendSuccessRes(res, { result })
}

module.exports = updateStatusContact
