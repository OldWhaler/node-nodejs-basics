import { unlink } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    try {
        await unlink(join(__dirname, 'files', 'fileToRemove.txt'));
    } catch (error) {
        throw Error('FS operation failed');
    }
};

await remove();