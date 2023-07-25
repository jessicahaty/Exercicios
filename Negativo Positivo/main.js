function enviar() {

    var numero = document.getElementById('numero').value;

    if (numero > 0) {
        alert('Digite um numero negativo');
    }else {
        document.getElementById('resposta').innerHTML = numero * -1; 
    }

}