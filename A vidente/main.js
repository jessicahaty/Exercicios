function prever()
{

    var nome = document.getElementById('nome').value
    var filhos = document.getElementById('filhos').value
    var cidade = document.getElementById('cidade').value
    var profissao = document.getElementById('profissao').value

    document.getElementById('resultado').innerHTML = "A vidente preve: " + nome + " tera " + filhos + " filhos e vivera em " + cidade + " trabalhando como " + profissao;


}