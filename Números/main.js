function dobro() {
    var numero = document.getElementById('dobro').value
    var resultado = numero * 2;

    document.getElementById('respostaDobro').innerHTML = "O Dobro de " + numero + " é " + resultado

}

function metade() {
    var numero = document.getElementById('metade').value
    var resultado = numero/2;

    document.getElementById('respostaMetade').innerHTML = "A metade de " + numero + " é " + resultado;


}


function saudacao() {
    var nome = document.getElementById('nome').value
    
    document.getElementById('saudacao').innerHTML = "Ola " + nome + " Tudo bem ?"
}