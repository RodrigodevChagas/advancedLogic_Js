class Mensagem {
   
    // Constructor com paramêtro pré definido, para que possa ser instanciado sem, porém aceite parâmetro
    constructor(texto = ''){
        
        this._texto = texto;
    }

    get texto(){
        
        return this._texto
    }

    set texto(texto){

        this._texto = texto;
    }
}