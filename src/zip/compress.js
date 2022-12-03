import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from "node:stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    const source = createReadStream(join(__dirname, 'files', 'fileToCompress.txt'));
    const destination = createWriteStream(join(__dirname, 'files', 'archive.gz'));
    const compressStream = createGzip()

    pipeline(
        source,
        compressStream,
        destination,
        err => console.log(err)
    )
};

await compress();