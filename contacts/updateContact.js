const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts');
const chalk = require('chalk');

const updateContact = async (contactId, name, email, phone) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(
    (contact) => contact.id.toString() === contactId
  );

  if (index === -1) {
    console.log(chalk.red(`Contact not apdate. id - ${contactId} not found`));
    return null;
  }
  contacts[index] = { id: contactId, name, email, phone };
  await updateContacts(contacts);

  console.log(chalk.green(`Contact whih id - ${contactId} updated`));
  console.table(contacts[index]);

  console.log(chalk.yellow(`Contact list whih update id - ${contactId}`));
  console.table(contacts);

  return contacts[index];
};

module.exports = updateContact;
