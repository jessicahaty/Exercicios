function enviar() {
    var cor = document.getElementById('cores').value
    var corSelecionada = cor


    if (corSelecionada === "verde") {
        document.write('Pode passar')
    }else if (corSelecionada === "amarelo") {
        document.write('Melhor freiar')
    }else {
        document.write('PARAAAAAAAAAAA')
    }
}