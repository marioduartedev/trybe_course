let nota = 57;
let conceito = null;

if (nota < 0 || nota > 100){
    console.log("Erro, nota errada");
}
else if (nota >= 90){
    conceito = "A";
}
else if (nota >= 80){
    conceito = "B";
}
else if (nota >= 70){
    conceito = "C";
}
else if (nota >= 60){
    conceito = "D";
}
else if (nota >= 50){
    conceito = "E";
}
else if (nota < 50){
    conceito = "F";
}

console.log(conceito)