

function calcula() {

    var idade = document.getElementById('idade').value;
    var idadePermitida = document.getElementById('idadePermitida').value;

    if (idade < 0 || idadePermitida < 0) {
        alert("Digite numeros positivos !")
    }else if (idade > idadePermitida) {
        document.write('Voce pode dirigir !!')
    }else {
        document.write('Voce nao pode dirigir !!')
    }

}