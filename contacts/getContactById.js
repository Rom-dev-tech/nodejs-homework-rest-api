const chalk = require('chalk');
const listContacts = require('./listContacts');

const getContactById = async (contactId) => {
  const contacts = await listContacts();
  const contact = contacts.find((item) => item.id.toString() === contactId);

  if (!contact) {
    console.log(chalk.red(`Contact no found with id - ${contactId}`));
    return null;
  }

  console.log(chalk.green(`Found contact with id - ${contactId}`));
  console.table(contact);

  return contact;
};

module.exports = getContactById;
