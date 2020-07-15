let n = 5;
let linha = "*";
if (n > 1){
    for (let i = 1; i < n; i++){
        linha += "*"
    }
    for (let j = 1; j <= n; j++){
        console.log(linha);
    }
}