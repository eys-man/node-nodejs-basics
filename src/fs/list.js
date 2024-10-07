import { readdir } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    try {
        const files = await readdir(path.resolve(__dirname, './files'));
        files.forEach(file => console.log(file));
        // или так
        // for (const file of files) console.log(file);
    } catch {
        throw new Error(`FS operation failed`);
    }
};

await list();
