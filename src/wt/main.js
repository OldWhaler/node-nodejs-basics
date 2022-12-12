import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';
import { join } from 'path';
import { getDirname } from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const performCalculations = async () => {
    const processorsAmount = cpus().length;
    const threadPromisesList = [];

    for (let i = 0; i < processorsAmount; i++) {
        const promise = new Promise((resolve, reject) => {
            const worker = new Worker(join(__dirname, './worker.js'), {
                workerData: {
                    num: i + 10
                }
            });
            worker.on('message', msg => resolve(msg));
            worker.on('error', err => reject(err))
        })
        threadPromisesList.push(promise)
    }

    const promisesResult = await Promise.allSettled(threadPromisesList);

    const result = promisesResult.map(({ status, value }) => ({
        status: status === 'fulfilled' ? 'resolved' : 'error',
        data: status === 'fulfilled' ? value : null
    }))

    console.log(result)
};

await performCalculations();