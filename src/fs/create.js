import { writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    try {
        await writeFile(
            join(__dirname, 'files', 'fresh.txt'),
            'I am fresh and young',
            { flag: 'wx' });
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await create();