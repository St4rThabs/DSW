function arrayToList(array){
    var list = null;
    for(var i = array.length - 1; i >= 0; i--){
        list = { valor: array[i], restante: list};
    }

    return list;
}

console.log(arrayToList([1, 2, 3]));