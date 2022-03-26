"use strict"

class DateHelper{

    constructor(){
        throw new Error('Essa classe abstrata não pode ser instanciada');
    }

    static textoParaData(texto){
        if (/\d{4}-\d{2}-\d{2}/.test(texto)){
            return new Date(texto.split('-'));
        }else{
            throw new Error('Formato de data inválido');
        }
        
        
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
}