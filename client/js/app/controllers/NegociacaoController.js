"use strict"

class NegociacaoController{
    constructor(){
        const $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacoesView = new NegociacoesView($('[data-tipo=NegociacaoView]'));
    }

    adiciona(event){
        event.preventDefault();
        const negociacao = this._criaNegociacao();
        this._listaNegociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._listaNegociacoes.negociacoes);
        this.limpaCampos();
    }

    limpaCampos(){
        this._inputData.value='';
        this._inputQuantidade.value = '1';
        this._inputValor.value = '0.0'
        this._inputData.focus();
    }

    _criaNegociacao(){
        return new Negociacao (DateHelper.textoParaData(this._inputData.value), this._inputQuantidade.value, this._inputValor.value);
    }
}