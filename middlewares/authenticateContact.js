const { Contact } = require('../models')

const authenticateContact = async (contactId, email) => {
  const user = await Contact.findById(contactId).populate('owner', '_id email')

  const result = !(!user || email !== user.owner.email)

  return result
}

module.exports = authenticateContact
