const fs = require('fs/promises');
const chalk = require('chalk');

const contactsPath = require('./contactsPath');

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  const contacts = JSON.parse(data);
  console.log(chalk.green('Contacts list found'));
  console.table(contacts);
  return contacts;
};

module.exports = listContacts;
