import { writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
    // console.log(`__filename = ${__filename}\n`);
    // console.log(`__dirname = ${__dirname}\n`);
    try {
        await writeFile(path.resolve(__dirname, './files/fresh.txt'), 'I am fresh and young', { flag: 'wx' });
    } catch( error ) {
        throw new Error(`FS operation failed`);
    }
};

await create();
