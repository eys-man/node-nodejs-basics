import { mkdir, readdir, copyFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
    // console.log(`__filename = ${__filename}`);
    // console.log(`__dirname = ${__dirname}`);

    const sourceDir = path.resolve(__dirname, './files');
    const targetDir = path.resolve(__dirname, './files_copy');

    // console.log(`sourceDir = ${sourceDir}`);
    // console.log(`targetDir = ${targetDir}`);

    try {
        await mkdir(targetDir);

        const files = await readdir(sourceDir);
        // перебором массива файлов через forEach, запуск копирования без ожидания результата
        // files.forEach(async file => {
        //     // console.log(`copy file '${file}'`);
        //     await copyFile(path.resolve(sourceDir, file), path.resolve(targetDir, file));
        // });

        // перебором массива файлов через for..of , запуск копирования с ожиданием результата
        // for (const file of files) {
        //     // console.log(`copy file '${file}'`);
        //     await copyFile(path.resolve(sourceDir, file), path.resolve(targetDir, file));
        // };

        // через Promise.all параллельное выполнение копирования
        await Promise.all(files.map(file => {
            // console.log(`copy file '${file}'`);
            copyFile(path.resolve(sourceDir, file), path.resolve(targetDir, file));
        }));

    } catch( error ) {
        throw new Error(`FS operation failed`);
    }
};

await copy();
