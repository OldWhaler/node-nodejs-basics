import { createReadStream, createWriteStream } from "node:fs";
import { createGzip } from "node:zlib";
import { join } from 'node:path';
import { pipeline } from "node:stream";
import { getDirname } from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

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