import fsp from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    try {
        const files = await fsp.readdir(join(__dirname, 'files'));
        if (files.includes('properFilename.md')) {
            throw Error('FS operation failed');
        }

        await fsp.rename(
            join(__dirname, 'files', 'wrongFilename.txt'),
            join(__dirname, 'files', 'properFilename.md')
        )
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await rename();