let custo = 10;
let venda = 20;
let imposto = custo * 0.2;
let lucro = venda - custo - imposto;

if (custo < 0 || venda < 0){
    console.log("Erro valores negativos");
}else{
    console.log(lucro*1000);
}