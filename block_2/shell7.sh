#!/bin/bash
dir=$1
if [ -d $dir ]
then
   echo "O $dir tem $(ls $dir | wc -l) arquivos"
else   
    echo "O argumento $dir não é um diretório."
fi