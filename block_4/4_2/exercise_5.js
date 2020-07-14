let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = numbers[0];

for (let i = 1; i < numbers.length-1; i++){
    if (numbers[i] > maior){
        maior = numbers[i];
    }
}
console.log(maior);