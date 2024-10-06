import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createUnzip } from 'zlib';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    try {
        const readStream = createReadStream(path.resolve(__dirname, './files/archive.gz'));
        const writeStream = createWriteStream(path.resolve(__dirname, './files/fileToCompress.txt'));

        await pipeline(readStream, createUnzip(), writeStream);
    } catch {
        throw new Error(`FS operation failed`);
    }
};

await decompress();
