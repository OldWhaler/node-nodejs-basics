import { readdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    try {
        const files = await readdir(join(__dirname, 'files'));
        console.log(files)
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await list();