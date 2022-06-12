class DataHelper{

    constructor(){
        throw new Error('A classe não pode ser instanciada');
    }

    static dataParaTexto(data){
        return data.getDate() 
        + '/' + (data.getMonth() +1) 
        + '/' + data.getFullYear();
    }

    static textoParaData(texto){
        return new Date(...
            texto.split('-')
            .map((item, index) => item - index % 2)
            );
    }
}