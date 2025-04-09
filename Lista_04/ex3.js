function verificaNumero(numero) {
  return new Promise((res, rej) => {
    if (typeof numero != "number") {
      rej("erro");
    } else if (numero % 2 == 0) {
      setTimeout(() => {
        rej("par");
      }, 2000);
    } else {
      setTimeout(() => {
        res("ímpares");
      }, 1000);
    }
  });
}

verificaNumero(7)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

verificaNumero(2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

verificaNumero("aaa")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
