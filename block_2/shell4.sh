#!/bin/bash
ARQUIVO="/home/mario/shell_script/shell4.sh"
if [ -e $ARQUIVO ]
    then
        echo "O caminho $ARQUIVO está habilitado!"
        if [ -w $ARQUIVO ]
            then
                echo "Você tem permissão para editar $ARQUIVO"
            else
                echo "Você não foi autorizado a editar $ARQUIVO"
        fi
    else
        echo "O caminho $ARQUIVO não está habilitado!"
fi
