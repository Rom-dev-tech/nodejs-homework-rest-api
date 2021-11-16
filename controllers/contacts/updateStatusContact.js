const { Contact } = require('../../models')
const { sendSuccessRes, notFound } = require('../../utils')

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params
  const { favorite } = req.body
  const result = await Contact.findByIdAndUpdate(contactId, { favorite }, {
    new: true,
  })

  if (!result) {
    return notFound(contactId, next)
  }

  sendSuccessRes(res, { result })
}

module.exports = updateStatusContact
