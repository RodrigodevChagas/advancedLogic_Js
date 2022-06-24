class DataHelper{

    constructor(){
        throw new Error('A classe não pode ser instanciada');
    }

    //retona string de texto para que seja exibido data no formato dd/mm/aaaa
    static dataParaTexto(data){
        return `${data.getDate()}/${data.getMonth() +1}/${data.getFullYear()}`;
    }

    // Recebe string de data no formato aaaa-mm-dd e converte para um objeto da classe Date
    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error('Deve estar no formato aaaa-mm-dd');
        }
        
        return new Date(...
            texto.split('-')
            .map((item, index) => item - index % 2)
            );
    }
}