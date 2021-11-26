const contactsOperations = require('../../model/contacts')
const { sendSuccessRes } = require('../../helpers')

const listContacts = async (req, res) => {
  const result = await contactsOperations.listContacts()
  sendSuccessRes(res, { result })
}

module.exports = listContacts
