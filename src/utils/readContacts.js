import path from 'node:path';
import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';

export const readContacts = async () => {
  const FULL_PATH = path.resolve(PATH_DB);

  const data = await fs.readFile(FULL_PATH, { encoding: 'utf-8' });
  return JSON.parse(data);
};
