import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { getDirname } from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const list = async () => {
    try {
        const files = await readdir(join(__dirname, 'files'));
        console.log(files)
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await list();