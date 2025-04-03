import fs from 'node:fs';
import path from 'node:path';

function lerTudoDeVez(fileName) {
    const init = Date.now();
    const dirPath = path.dirname(process.argv[1]);
    const localfile = path.join(dirPath, fileName);
    
    const text = fs.readFileSync(localfile, "utf-8");
    console.log(text);
    const end = Date.now();
    console.log(`Tempo total: ${end - init} ms`);
}

export default {
    lerTudoDeVez
}