const { createHmac } = await import('node:crypto');
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { getDirname } from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const calculateHash = async () => {
    try {
        const data = await readFile(join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
        const hash = createHmac('sha256', data)
            .update('I love cupcakes')
            .digest('hex');
        console.log(hash);
    } catch (error) {
        throw error
    }
};

await calculateHash();