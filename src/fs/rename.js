import fsp from 'node:fs/promises';
import { join } from 'node:path';
import { getDirname } from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const rename = async () => {
    try {
        await fsp.rename(
            join(__dirname, 'files', 'wrongFilenam.txt'),
            join(__dirname, 'files', 'properFilename.md')
        )
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await rename();