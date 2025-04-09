function firstPromise(numInt) {
  return new Promise((res, rej) => {
    if (numInt > 2) {
      res(numInt);
    } else {
      rej("Número menor que 2");
    }
  });
}

function secondPromise(data) {
  return new Promise((res, rej) => {
    if ((data + 1) % 2 === 0) {
      res("Data + 1 é par");
    } else {
      rej("Data + 1 não é par");
    }
  });
}

firstPromise(1)
  .then((data) => secondPromise(data))
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

firstPromise(3)
  .then((data) => secondPromise(data))
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

  firstPromise(4)
  .then((data) => secondPromise(data))
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
  
