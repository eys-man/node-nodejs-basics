import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compress = async () => {
    try {
        const readStream = createReadStream(path.resolve(__dirname, './files/fileToCompress.txt'));
        const writeStream = createWriteStream(path.resolve(__dirname, './files/archive.gz'));

        await pipeline(readStream, createGzip(), writeStream);
    } catch {
        throw new Error(`FS operation failed`);
    }
};

await compress();
