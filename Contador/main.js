function enviar(event) {

    event.preventDefault();    
    var numeroEscolhido = document.getElementById('numero').value;

    if(numeroEscolhido < 0) {
        alert('Digite apenas numeros positivos')
    }else {

        for(var i = 0; i <= numeroEscolhido; i++) {
            document.write(i + "<br>")
    

        }
    }

}