const { Contact } = require('../../models')
const { sendSuccessRes } = require('../../utils')

const listContacts = async (req, res) => {
  const result = await Contact.find({})
  sendSuccessRes(res, { result })
}

module.exports = listContacts
