function enviar(event) {

    event.preventDefault(); 
    
    var nome = document.getElementById('nome').value;
    
    document.write('Ola ', nome)
    document.write('<br>')
    document.write('Tudo bem ', nome, '?')
}