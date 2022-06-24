class MensagemView extends View{

// Retorna template string com elemento HTML para ser lançado no DOM
    template(model){

        return model.texto ? `<p class="alert alert-info">${model.texto}</p>` : '<p></p>';
    }
}