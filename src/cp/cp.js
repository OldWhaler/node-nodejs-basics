import { spawn } from 'node:child_process';
import { join } from 'node:path';
import { getDirname } from '../getDirname.js';

const __dirname = getDirname(import.meta.url);

const spawnChildProcess = async (args) => {
    const cp = spawn('node', [join(__dirname, 'files', 'script.js'), ...args]);

    process.stdin.on('data', msg => {
        cp.stdin.write(msg)
    });

    cp.stdout.on('data', data => {
        console.log(data.toString())
    })

    cp.on('exit', code => {
        console.log(`Дочерний процесс завершился с кодом ${code}`);
        process.exit()
    })
};

spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);