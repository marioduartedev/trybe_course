function somatorio(n) {
    soma = 0;
    for (let i = 1; i <= n; i++){
        soma += i;
    }
    return soma;    
}
console.log(somatorio(5));
