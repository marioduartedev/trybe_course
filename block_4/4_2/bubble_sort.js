let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let j = 1; j < numbers.length-1; j++){
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i] < numbers[i+1]){
            let aux = numbers[i+1];
            numbers[i+1] = numbers[i];
            numbers[i] = aux;
        }
    }
}
console.log(numbers);
