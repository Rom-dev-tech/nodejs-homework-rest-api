const { NotFound } = require('http-errors')
const { Contact } = require('../../models')
const { sendSuccessRes } = require('../../utils')

const removeContact = async (req, res, next) => {
  const { contactId } = req.params
  const { _id } = req.user

  const checkContact = await Contact.findById(contactId)

  if (!checkContact || String(_id) !== String(checkContact.owner._id)) {
    return next(new NotFound(`Contact with id=${contactId} not found`))
  }

  const result = await Contact.findByIdAndRemove(contactId).populate('owner', '_id email')

  const { owner } = result

  sendSuccessRes(res, { message: 'contact deleted', delete_id: contactId, owner })
}

module.exports = removeContact
