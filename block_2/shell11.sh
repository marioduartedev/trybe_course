#!/bin/bash
DIRETORIO=$1
EXTENSAO=$2

DIA=$(date +%F)

cd $DIRETORIO

    for ARQUIVO in $(ls *.$EXTENSAO)
        do
            echo "Arquivo '$ARQUIVO' renomeado para '$DIA-$ARQUIVO'"
            mv $ARQUIVO $DIA-$ARQUIVO
    done