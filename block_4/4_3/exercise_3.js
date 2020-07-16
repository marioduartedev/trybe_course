let n = 5;
let str = "    ";
let linha = "*";
if (n > 1){
    for (let i = 1; i <= n; i++){
        console.log(str+linha);
        str = str.substring(0,(str.length - 1));
        linha += "*";
    }
}