import { createReadStream } from "fs";
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from "node:stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    const readStream = createReadStream(join(__dirname, 'files', 'fileToRead.txt'));
    const writeStream = process.stdout;

    pipeline(
        readStream,
        writeStream,
        (err) => console.log(err)
    );
};

await read();