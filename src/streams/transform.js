import { Transform, pipeline } from "node:stream";

const transform = async () => {
    const readStream = process.stdin;
    const writeStream = process.stdout;

    const revert = new Transform({
        transform(chunk, enc, cb) {
            const reverse = chunk
                .toString()
                .trim()
                .split('')
                .reverse()
                .join('') + '\n';
            cb(null, reverse)
        }
    });

    pipeline(
        readStream,
        revert,
        writeStream,
        err => console.log(err)
    )
};

await transform();