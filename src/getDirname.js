import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

function getDirname(url) {
  const __filename = fileURLToPath(url);
  return dirname(__filename);
};

export { getDirname }
