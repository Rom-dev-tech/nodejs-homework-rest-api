const crypto = require('crypto');
const chalk = require('chalk');
const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts');

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);
  console.log(chalk.green('Add new contact'));
  console.table(newContact);
  await updateContacts(contacts);
  console.log(chalk.yellow(`Contacts list with id - ${newContact.id}`));
  console.table(contacts);
  return newContact;
};

module.exports = addContact;
