function romanos(algarismos){
    let tabela = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let numero = 0;
    for (let i = 0; i < algarismos.length; i++){
        let soma = 0;
        if (tabela[algarismos[i]] < tabela[algarismos[i+1]]) {
            numero -= tabela[algarismos[i]];
        }else {
            numero += tabela[algarismos[i]]; 
        }
    }
    console.log(numero);  
}
romanos("CMIX");