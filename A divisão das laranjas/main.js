function calcular() {
    var laranjas = document.getElementById('laranjas').value
    var vizinhos = document.getElementById('vizinhos').value
    var laranjasDivididas = parseInt(laranjas/vizinhos)
    var resto = laranjas % vizinhos

    document.write("Cada vizinho ficará com ",laranjasDivididas," laranjas","<br>")
    document.write("Restaram ",resto," laranjas")
}