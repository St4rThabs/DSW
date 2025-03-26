function every(array, callback) {
  for (var i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

const array = [2, 4, 6, 8];
const ehPar = (num) => num % 2 === 0;

console.log(every(array, ehPar));

const array2 = [2, 3, 6, 8];

console.log(every(array2, ehPar));
