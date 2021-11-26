const fs = require('fs/promises')
const contactsPath = require('./contactsPath')

const updateContacts = async (newProducts) => {
  const contactsStr = JSON.stringify(newProducts)
  await fs.writeFile(contactsPath, contactsStr)
}

module.exports = updateContacts
