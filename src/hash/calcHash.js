const { createHmac } = await import('node:crypto');
import { readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    try {
        const data = await readFile(join(__dirname, 'files', 'fileToCalculateHashFor.txt'));
        const hash = createHmac('sha256', data)
            .update('I love cupcakes')
            .digest('hex');
        console.log(hash);
    } catch (error) {
        console.log(error)
    }
};

await calculateHash();