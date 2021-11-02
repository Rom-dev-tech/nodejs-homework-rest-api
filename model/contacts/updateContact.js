const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

const updateContact = async (contactId, name, email, phone) => {
  const contacts = await listContacts()
  const index = contacts.findIndex(
    (contact) => contact.id === contactId
  )

  if (index === -1) {
    return null
  }
  contacts[index] = { id: contactId, name, email, phone }
  await updateContacts(contacts)

  return contacts[index]
}

module.exports = updateContact
