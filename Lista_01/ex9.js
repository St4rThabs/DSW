const add = (a, b) => a+b;

const mutiply = (a, b) => a*b;

const executeFuction = (func, a, b) => {
    return func(a,b);
};

console.log(executeFuction(add, 2, 3));
console.log(executeFuction(mutiply, 2,3));