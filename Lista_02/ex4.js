function listToArray(list) {
  var array = [];

  for (var i = list; i != null; i = i.restante) {
    array.push(i.valor);
  }

  return array;
}

console.log(
  listToArray({
    valor: 1,
    restante: { valor: 2, restante: { valor: 3, restante: null } },
  })
);
