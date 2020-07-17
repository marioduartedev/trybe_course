function menorValor(array) {
    let indiceMenor = 0;
    for (let i in array){
        if(array[indiceMenor] > array[i]){
            indiceMenor = i;
        }
    }
    return indiceMenor;    
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]));


