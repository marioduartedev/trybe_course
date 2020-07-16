function verificaPalindrome(palavra) {
    let contador = 0;
    for(let letra in palavra){
        if(palavra[letra] != palavra[palavra.length-1-letra]){
            contador ++;
        }
    }
    if (contador > 0){
        return false;
    }else{
        return true;
    }
    
}
console.log(verificaPalindrome("arara"));