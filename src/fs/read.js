import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
    try {
        const content = await readFile(path.resolve(__dirname, './files/fileToRead.txt'), 'utf8');
        console.log(content);
    } catch( error ) {
        throw new Error(`FS operation failed`);
    }
};

await read();
