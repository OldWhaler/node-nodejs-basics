import { createReadStream, createWriteStream } from "node:fs";
import { createGunzip } from "node:zlib";
import { join } from 'node:path';
import { pipeline } from "node:stream";
import { getDirname } from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

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