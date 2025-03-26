function nth(list, n) {
    var listaAtual = list;
    while (listaAtual != null && n > 0) {
        listaAtual = listaAtual.restante;
      n--;
    }
    return listaAtual ? listaAtual.valor : undefined;
  }
  
  let list = {
    valor: 1,
    restante: { valor: 2, restante: { valor: 3, restante: null } },
  };

  console.log(nth(list, 1)); 
  console.log(nth(list, 3)); 