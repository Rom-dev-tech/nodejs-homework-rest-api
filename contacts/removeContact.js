const listContacts = require('./listContacts');
const updateContacts = require('./updateContacts');
const chalk = require('chalk');

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const index = contacts.findIndex(
    (contact) => contact.id.toString() === contactId
  );

  if (index === -1) {
    console.log(chalk.red(`Contact not remove. id - ${contactId} not found`));
    return null;
  }
  const removeContacts = contacts.splice(index, 1);
  await updateContacts(contacts);

  console.log(chalk.red(`Remove contact id - ${contactId}`));
  console.table(removeContacts);
  console.log(chalk.yellow(`Contancts list with out id - ${contactId}`));
  console.table(contacts);
  return removeContacts;
};

module.exports = removeContact;
