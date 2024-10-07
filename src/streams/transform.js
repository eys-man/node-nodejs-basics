import { pipeline } from 'stream/promises';
import { Transform } from 'stream';

const transform = async () => {
    try {
        const reverseStream = new Transform({
            transform(chunk, encoding, callback) {
                callback(null, `${chunk.toString().split('').reverse().join('')}\n`);
                // здесь '\n' добавлен в конец строки только для того, чтоб вводить с новой строки, а не сразу за выведенным текстом
            },
        });

        await pipeline(process.stdin, reverseStream, process.stdout);
    } catch {
        throw new Error('Error!');
    }
};

await transform();
