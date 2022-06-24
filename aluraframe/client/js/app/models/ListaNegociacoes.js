class ListaNegociacoes{
    constructor(){

        this._negociacoes = []; // Declara array
    }
     
    // adiciona uma negociação no vetor com o método push
    adiciona(negociacao){

        this._negociacoes.push(negociacao);
    }

    //Concatena o array original em uma cópia e a retorna
    get negociacoes(){

        return [].concat(this._negociacoes);
    }
}