function maiorNome(array) {
    let maior = array[0];
    for (let i = 1; i < array.length-1; i++){
        if(array[i].length > maior.length){
            maior = array[i];
        }
    }
    return maior;    
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));
