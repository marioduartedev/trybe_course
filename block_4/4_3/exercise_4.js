let n = 9;
let quant = (n-1)/2;
let linha = "*";
let espacos = "";
if (n > 1){
    for (let j = 1; j <= quant; j++){
        espacos += " ";
    }
    for (let i = 1; i <= quant+1; i++){
        console.log(espacos+linha);
        espacos = espacos.substring(0,(espacos.length - 1));
        linha += "**";
    }
}