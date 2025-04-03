import fs from 'node:fs';
import readline from 'node:readline';

const filePath = process.argv[2];

if (!filePath) {
    console.log('Por favor, forneça o caminho para o arquivo.');
    process.exit(1);
}

const rl = readline.createInterface({
    input: fs.createReadStream(filePath, 'utf8'),
    output: process.stdout,
    terminal: false
});

rl.on('line', console.log);

rl.on('close', () => console.log('Leitura concluída.'));
