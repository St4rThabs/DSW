function deepEqual(x, y) {
  if (x === y) return true;

  if (
    typeof x !== "object" ||
    typeof y !== "object" ||
    x === null ||
    y === null
  )
    return false;

  let keysX = Object.keys(x);
  let keysY = Object.keys(y);

  if (keysX.length !== keysY.length) {
    return false;
  }

  for(key of keysX){
    if(!keysY.includes(key) || !deepEqual(x[key], y[key]))
        return false;
  }

  return true;
}

const obj1 = {
    nome: "Maria",
    idade: 30,
    endereco: { rua: "Rua A", numero: 123 }
  };
  
  const obj2 = {
    nome: "Maria",
    idade: 30,
    endereco: { rua: "Rua A", numero: 123 }
  };
  
  const obj3 = {
    nome: "Jose",
    idade: 25,
    endereco: { rua: "Rua B", numero: 456 }
  };

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false 
console.log(deepEqual(obj1, { nome: "Maria", idade: 30 })); // false 
console.log(deepEqual(null, null)); // true 
console.log(deepEqual(null, {})); // false 
  
