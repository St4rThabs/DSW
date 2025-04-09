function dobrarEm5Segundos(x) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(x * 2);
    }, 5000);
  });
}

dobrarEm5Segundos(10)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
