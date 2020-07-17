function maisRepetido(array) {
    let maisRepeticoes = 0;
    let maisRepetido = array[0];
    for(let i = 0; i < array.length; i++){
        let repeticoes = 0;
        for(let j = 0; j < array.length; j++){
            if(array[i] === array[j]){
                repeticoes++;
            }
        }
        if(repeticoes > maisRepeticoes){
            maisRepeticoes = repeticoes;
            maisRepetido = array[i];
        }
    }
    return maisRepetido  
}
console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));
