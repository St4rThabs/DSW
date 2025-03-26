function prepend(valor, list){
    return {valor: valor, restante: list};
}

var list = {
    valor: 1,
    restante: { valor: 2, restante: { valor: 3, restante: null } },
  };

console.log(prepend(0, list));