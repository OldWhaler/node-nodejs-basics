import { unlink } from 'node:fs/promises';
import { join } from 'node:path';
import { getDirname } from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const remove = async () => {
    try {
        await unlink(join(__dirname, 'files', 'fileToRemove.txt'));
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await remove();