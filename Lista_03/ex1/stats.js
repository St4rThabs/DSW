const soma = (x, y) => x + y;
const quadrado = (x) => x * x;

function media(dados) {
  return dados.reduce(soma) / dados.length;
}

function desvioPadrao(dados) {
  let médiaCalculada = media(dados);
  return Math.sqrt(
    dados
      .map((x) => x - médiaCalculada)
      .map(quadrado)
      .reduce(soma) /
      (dados.length - 1)
  );
}

export default {
  media,
  desvioPadrao
};
