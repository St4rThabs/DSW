function verificaNumero() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res("olá mundo");
      }, 2000);
    });
  }
  
  verificaNumero()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  