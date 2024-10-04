import { unlink } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    try {
        await unlink(path.resolve(__dirname, './files/fileToRemove.txt'));
    } catch( error ) {
        throw new Error(`FS operation failed`);
    }
};

await remove();
