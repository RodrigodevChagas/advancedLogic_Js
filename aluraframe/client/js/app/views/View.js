class View{
    
    constructor(elemento){

        this._elemento = elemento;
    }

    template(){
        throw new Error("Método template deve ser implementado");
    }

    // Manda o template implementado para o HTML
    update(model){
        
        this._elemento.innerHTML = this.template(model);
    }
}