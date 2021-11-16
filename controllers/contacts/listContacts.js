const { Contact } = require('../../models')
const { sendSuccessRes } = require('../../utils')

const listContacts = async (req, res) => {
  const { _id } = req.user
  const result = await Contact.find({ owner: _id }).populate('owner', '_id email')
  sendSuccessRes(res, { result })
}

module.exports = listContacts
