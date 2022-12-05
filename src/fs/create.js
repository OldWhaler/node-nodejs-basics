import { writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getDirname } from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const create = async () => {
    try {
        await writeFile(
            join(__dirname, 'files', 'fresh.txt'),
            'I am fresh and young',
            { flag: 'wx' });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await create();