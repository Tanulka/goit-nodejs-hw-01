const { program } = require('commander');

const contactsOperations = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      const contacts = await contactsOperations.listContacts();
      console.log(contacts);
      break;

    case 'get':
      const contact = await contactsOperations.getContactById(id);
      console.log(contact);
      break;

    case 'add':
      const newContact = await contactsOperations.addContact(name, email, phone);
      console.log(newContact);
      break;

    case 'remove':
      const removeContact = await contactsOperations.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

program
  .option('-a, --action <type>', 'contacts action')
  .option('--id <type>', 'contact id')
  .option('-n, --name <type>', 'contact name')
  .option('-e, --email <type>', 'contact email')
  .option('-p, --phone <type>', 'contact phone');

program.parse(process.argv);
const options = program.opts();

invokeAction(options);

// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: '1' });
// invokeAction({ action: 'add', name: 'Sedrick', email: 'sed@gmail.com', phone: '090875412346' });
// invokeAction({ action: 'remove', id: '9e98a99f-0493-4c35-ba0c-9527d7805a91' });
