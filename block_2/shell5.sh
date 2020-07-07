#!/bin/bash
read -p "Digite o caminho do arquivo: " CAMINHO 
if [ -d $CAMINHO ]
    then
        echo "Este é o caminho de um diretório"
    else
        if [ -f $CAMINHO ]
            then
                echo "Este é o caminho de um arquivo comum"
            else
                echo "Este é o caminho de outro tipo de arquivo"
        fi
fi
echo "Segue a listagem detalhada:"
ls -l $CAMINHO
