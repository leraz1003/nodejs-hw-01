import { readContacts } from './utils/readContacts.js';

readContacts()
  .then((contacts) => console.log('Contacts:', contacts))
  .catch((error) => console.error('Error:', error.message));
