let peca = "BIspo";
peca = peca.toLowerCase();
switch (peca){
    case "rainha":
        console.log("Qualquer direção/varias casas");
        break;
    case "rei":
        console.log("Qualquer direção/uma casa");
        break;
    case "bispo":
        console.log("Diagonal");
        break;
}