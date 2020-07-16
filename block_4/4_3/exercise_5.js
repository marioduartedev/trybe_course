let n = 7;
let quant = (n-1)/2;
let linha = "*";
let espacos = "";
let meio = " ";
if (n > 1){
    for (let j = 1; j <= quant; j++){
        espacos += " ";
    }
    console.log(espacos+linha);
    for (let i = 1; i <= quant-1; i++){
        espacos = espacos.substring(0,(espacos.length - 1));
        linha += "**";
        console.log(espacos+"*"+meio+"*");
        meio += "  ";
    }
    console.log(linha+"**");
}