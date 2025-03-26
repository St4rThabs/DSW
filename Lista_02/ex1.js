class Vec {
    constructor(x, y) 
    {
        this.x = x;
        this.y = y;
    }

    soma(vetor){
        return new Vec(this.x + vetor.x, this.y + vetor.y);
    }


    subtracao(vetor){
        return new Vec(this.x - vetor.x, this.y - vetor.y);
    }

    get comprimento(){
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

const vec1 = new Vec(3, 4);
const vec2 = new Vec(1, 2);

const resultadoSoma = vec1.soma(vec2);
console.log(`Soma: ${resultadoSoma.x}, ${resultadoSoma.y}`);

const resultadoSubstracao = vec1.subtracao(vec2);
console.log(`Subtração: ${resultadoSubstracao.x}, ${resultadoSubstracao.y}`);

console.log(`Comprimento do vetor 1: ${vec1.comprimento}`);
console.log(`Comprimento do vetor 2: ${vec2.comprimento}`);