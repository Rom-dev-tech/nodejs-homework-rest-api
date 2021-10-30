const crypto = require('crypto')
const listContacts = require('./listContacts')
const updateContacts = require('./updateContacts')

const addContact = async (data) => {
  const contacts = await listContacts()
  const newContact = { id: crypto.randomUUID(), ...data }
  contacts.push(newContact)

  await updateContacts(contacts)

  return newContact
}

module.exports = addContact
