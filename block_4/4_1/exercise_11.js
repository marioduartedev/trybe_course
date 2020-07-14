let salarioBruto = 3000;
let inss;
let ir;

if (salarioBruto <= 1556.94){
    inss = 0.08 * salarioBruto;
}
else if (salarioBruto <= 2594.92){
    inss = 0.09 * salarioBruto;
}
else if (salarioBruto <= 5189.82){
    inss = 0.11 * salarioBruto;
}
else{
    inss = 570.88;
}

let salarioLiquido = salarioBruto - inss;

if (salarioLiquido <= 1903.98){
    ir = 0;
}
else if (salarioLiquido <= 2826.65){
    ir = 0.075 * salarioLiquido - 142.8;
}
else if (salarioLiquido <= 3751.05){
    ir = 0.15 * salarioLiquido - 354.8;
}
else if (salarioLiquido <= 4664.68){
    ir = 0.225 * salarioLiquido - 636.13;
}
else {
    ir = 0.275 * salarioLiquido - 869.36;
}
salarioLiquido -= ir;

console.log(salarioLiquido);