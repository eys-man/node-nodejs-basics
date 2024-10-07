import { spawn } from "node:child_process";
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const spawnChildProcess = async (args) => {
    try {
        const child = spawn(
            'node',
            [path.resolve(__dirname, './files/script'), ...args],
            {
                stdio: ['pipe', 'pipe', process.stderr],
            },
        );
    
        process.stdin.pipe(child.stdin);
        child.stdout.pipe(process.stdout);
    } catch {
        throw new Error('Error');
    }
};

spawnChildProcess( ['someArgument1', 'someArgument2', 111, 2222222, ]);
