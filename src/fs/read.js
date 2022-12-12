import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getDirname } from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const read = async () => {
    try {
        const data = await readFile(join(__dirname, 'files', 'fileToRead.txt'));
        console.log(data.toString());
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await read();