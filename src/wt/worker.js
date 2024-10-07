import { workerData, parentPort } from "worker_threads";

const nthFibonacci = (n) =>
    n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    try {
        const result = nthFibonacci(workerData);
        parentPort.postMessage(result);
    } catch {
        throw new Error('Error!');
    }
};

sendResult();
