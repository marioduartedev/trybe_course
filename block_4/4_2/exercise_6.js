let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let contador = 0;

for (let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 != 0){
        contador++;
    }
}
if (contador === 0){
    console.log("Nenhum valor ímpar encontrado.");
} else{
    console.log(contador);
}
