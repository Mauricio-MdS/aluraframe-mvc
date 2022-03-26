"use strict"

class NegociacaoController{
    constructor(){
        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();
        const negociacao = new Negociacao (DateHelper.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
        this.limpaCampos();
    }

    limpaCampos(){
        this._inputData.value='';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0'
        this._inputData.focus();
    }
}