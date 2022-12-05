import { mkdir, readdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getDirname } from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const copy = async () => {

    try {
        await mkdir(join(__dirname, 'files_copy'));
        const files = await readdir(join(__dirname, 'files'));

        await Promise.all(
            files.map(file => {
                copyFile(
                    join(__dirname, 'files', file),
                    join(__dirname, 'files_copy', file)
                )
            }));
    } catch (error) {
        throw Error('FS operation failed');
    }
};

copy();