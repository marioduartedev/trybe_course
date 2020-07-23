function verificaFimPalavra(word, ending) {
    let control = true;
    for (i = 0; i < ending.length; i++){
        if(word[word.length - ending.length + i] != ending[i]){
            control = false;
        }
    }
    return control;
}

console.log(verificaFimPalavra("joaofernando", "fernan"));
