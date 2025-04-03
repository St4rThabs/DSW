import { promises as fs } from 'fs';

async function lerArquivo() {
    let inicio = Date.now(); 

    try {
        const data = await fs.readFile('example.csv', 'utf8');
        console.log("Conteúdo do arquivo:\n", data);
    } catch (err) {
        console.error("Erro ao ler o arquivo:", err);
    }

    let fim = Date.now();
    console.log('Tempo de leitura (de uma só vez):', fim - inicio, 'ms');
}

lerArquivo();
