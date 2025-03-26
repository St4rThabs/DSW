function achataArray(arrays) {
  return arrays.reduce((i, arrayAtual) => i.concat(arrayAtual), []);
}

const arrayDeArrays = [
  [1, 2, 3],
  [4, 5],
  [6, 7],
];

const arrayAchatado = achataArray(arrayDeArrays);

console.log(arrayAchatado);
