function enviar(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var velocidade = parseInt(document.getElementById('velocidade').value, 10);

    var velocidadePermitida = 80;
    var valorCobrado = (velocidade - velocidadePermitida) * 10;

    if (velocidade > velocidadePermitida) {
        document.getElementById('resultadoValor').innerHTML = nome + ' Sua multa é de R$' + valorCobrado;
        if(velocidade <= velocidadePermitida * 1.10) {
            document.getElementById('resultadoPontos').innerHTML = 'Voce recebera 1 ponto na carteira'
        }else if (velocidade <= velocidadePermitida * 1.30) {
            document.getElementById('resultadoPontos').innerHTML = 'Voce recebera 5 pontos na carteira'
        }else if (velocidade <= velocidadePermitida * 1.50) {
            document.getElementById('resultadoPontos').innerHTML = 'Voce recebera 10 pontos na carteira'
        }else {
            document.getElementById('resultadoPontos').innerHTML = 'Voce tera sua carteira suspensa'
        }
    }
}
