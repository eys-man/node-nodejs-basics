import { createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const write = async () => {
    try {
        const writeStream = createWriteStream(
            path.resolve(__dirname, './files/fileToWrite.txt'),
            { flags: 'a', encoding: 'utf-8' }
        );
        await pipeline(process.stdin, writeStream);
    } catch {
        throw new Error('FS operation failed');
    }
};

await write();
