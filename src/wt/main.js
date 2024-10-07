import path, { dirname } from 'path';
import { fileURLToPath } from "url";

import { cpus } from "os";
import { Worker } from "worker_threads";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const filePath = path.resolve(__dirname, './worker.js');

    const numCpuCores = cpus().length;
    const workers = [];

    try {
        for (let i = 0; i < numCpuCores; i++) {
            workers.push(
                new Promise((resolve) => {
                    const worker = new Worker(
                        filePath,
                        { workerData: 10 + i }
                    );

                    worker.on('message', (data) => {
                        resolve({
                            status: 'resolved',
                            data,
                        });
                    });

                    worker.on('error', () => {
                        reject({
                            status: 'error',
                            data: null,
                        });
                    });
                })
            );
        }

        const result = await Promise.allSettled(workers);
        // console.log(result);
        let res = []; // массив будет содержать только пары значений status и data, т.к. result содержит и доп. поля
        result.forEach((item) => res.push(item.value));
        console.log(res);
    } catch (err) {
        throw new Error('Error');
    }
};

await performCalculations();
