import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    try {
        const data = await readFile(join(__dirname, 'files', 'fileToRead.txt'));
        console.log(data.toString());
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await read();