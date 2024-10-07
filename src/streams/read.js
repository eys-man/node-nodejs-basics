import { createReadStream } from 'fs';
// import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    try {
        const readStream = createReadStream(path.resolve(__dirname, './files/fileToRead.txt'), 'utf8');
        
        readStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });

        readStream.on('end', () => {
            process.stdout.write('\n');
            // только лишь для переноса промпта VS Code на новую строку, а то тот поверх выведенной строки его пишет
        });

        readStream.on('error', () => {
            throw new Error('FS operation failed');
        });

    } catch {
        throw new Error('FS operation failed');
    }

    // или так. вариант 2 через pipeline
    // try {
    //     const readStream = createReadStream(path.resolve(__dirname, './files/fileToRead.txt'), 'utf8');
    //     await pipeline(readStream, process.stdout);
    // } catch {
    //     throw new Error('FS operation failed');
    // }
};

await read();
