const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

const removeContact = async (contactId) => {
  const contacts = await listContacts()
  const index = contacts.findIndex(
    (contact) => contact.id.toString() === contactId
  )

  if (index === -1) {
    return null
  }
  const removeContacts = contacts.splice(index, 1)
  await updateContacts(contacts)

  return removeContacts
}

module.exports = removeContact
