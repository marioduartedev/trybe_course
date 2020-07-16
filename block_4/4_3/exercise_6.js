let numeroPrimo = 16;
let contador = 0;

for (i = 2; i < 17; i++){
    if (numeroPrimo % i === 0){
        contador++;
    }
}
if (contador === 0){
    console.log("O número "+numeroPrimo+" é primo.");
}else{
    console.log("O numero não é primo");
}