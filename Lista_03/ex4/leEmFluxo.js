import { createReadStream } from 'fs';
import { createInterface } from 'readline';

function lerArquivoEmFluxo() {
    let inicio = Date.now();

    const stream = createReadStream('example.csv', 'utf8');
    const rl = createInterface({
        input: stream,
        output: process.stdout,
        terminal: false
    });

    rl.on('line', (line) => {
        console.log(line);
    });

    rl.on('close', () => {
        let fim = Date.now();
        console.log('Tempo de leitura (em fluxo):', fim - inicio, 'ms');
    });
}

lerArquivoEmFluxo();
