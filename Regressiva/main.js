function enviar() {

    var numeroEscolhido = document.getElementById('numero').value;

    if ( numeroEscolhido < 0) {
        alert('Digite um numero positivo')
    }else {
        for (var i = 0; numeroEscolhido >= 0; numeroEscolhido--) {
            document.write(numeroEscolhido, "<br>")
        }
    }
}