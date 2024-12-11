import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
import path from 'node:path';

export const writeContacts = async (updatedContacts) => {
  const FULL_PATH = path.resolve(PATH_DB);
  await fs.writeFile(FULL_PATH, JSON.stringify(updatedContacts, undefined, 2));
};
