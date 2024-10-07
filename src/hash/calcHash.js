import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    try {
        const content = await readFile(path.resolve(__dirname, './files/fileToCalculateHashFor.txt'), 'utf8');
        const hash = createHash('sha256').update(content);
        console.log(hash.digest('hex'));
    } catch( error ) {
        throw new Error(`FS operation failed`);
    }
};

await calculateHash();
