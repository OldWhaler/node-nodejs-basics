import { createWriteStream } from "node:fs";
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from "node:stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    const writeStream = createWriteStream(join(__dirname, 'files', 'fileToWrite.txt'));
    const readStream = process.stdin;

    pipeline(
        readStream,
        writeStream,
        err => console.log(err)
    )
};

await write();