import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from "node:stream";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    const source = createReadStream(join(__dirname, 'files', 'archive.gz'));
    const destination = createWriteStream(join(__dirname, 'files', 'fileToCompress.txt'));
    const decompressStream = createGunzip()

    pipeline(
        source,
        decompressStream,
        destination,
        err => console.log(err)
    )
};

await decompress();