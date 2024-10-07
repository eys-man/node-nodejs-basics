import { rename as renameFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    const newName = path.resolve(__dirname, './files/properFilename.md');
    const oldName = path.resolve(__dirname, './files/wrongFilename.txt');

    try {
        await renameFile(oldName, newName);
    } catch( error ) {
        throw new Error(`FS operation failed`);
    }
};

await rename();
