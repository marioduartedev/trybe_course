function maiorValor(array) {
    let indiceMaior = 0;
    for (let i in array){
        if(array[indiceMaior] < array[i]){
            indiceMaior = i;
        }
    }
    return indiceMaior;    
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));


