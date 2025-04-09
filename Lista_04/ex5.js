function somar(a, b, callbackSucesso, callbackFalha) {
    const resultado = a + b;
    if (resultado % 2 === 0) {
      callbackSucesso(resultado);
    } else {
      callbackFalha(resultado);
    }
  }
  
  function sucesso(resultado) {
    console.log("Resultado é par:", resultado);
  }
  
  function falha(resultado) {
    console.log("Resultado é ímpar:", resultado);
  }
  
  somar(3, 5, sucesso, falha);


  function somarComPromise(a, b) {
    return new Promise((res, rej) => {
      const result = a + b;
      if (result % 2 === 0) {
        res(`Resultado é par:" ${result}`);
      } else {
        rej(`Resultado é ímpar: ${result}`);
      }
    });
  }
  
  somarComPromise(3, 4)
    .then((mensagem) => {
      console.log(mensagem);
    })
    .catch((erro) => {
      console.log(erro);
    });
  
  