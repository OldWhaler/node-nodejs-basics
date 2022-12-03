import { Transform, pipeline } from "node:stream";

const transform = async () => {
    const readStream = process.stdin;
    const writeStream = process.stdout;

    const transform = new Transform({
        transform(chunk, enc, cb) {
            const reverse = chunk
                .toString()
                .trim()
                .split('')
                .reverse()
                .join('');
            cb(null, reverse)
        }
    });

    pipeline(
        readStream,
        transform,
        writeStream,
        err => console.log(err)
    )
};

await transform();