const { Command } = require('commander');
const chalk = require('chalk');

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require('./contacts');

const program = new Command();

program
  .requiredOption('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      return await listContacts();

    case 'get':
      return await getContactById(id);

    case 'add':
      return await addContact(name, email, phone);

    case 'remove':
      return removeContact(id);

    case 'update':
      return await updateContact(id, name, email, phone);

    default:
      console.warn(chalk.red('Unknown action type!'));
  }
};

invokeAction(argv);
