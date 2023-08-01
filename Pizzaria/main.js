function calcular(event) {

    event.preventDefault();

    var custo = document.getElementById('custo').value
    var valorVendido = document.getElementById('valorVendido').value
    var nomePizza = document.getElementById('nomePizza').value

    var imposto = parseFloat((valorVendido*0.089))

    var lucro = (valorVendido - custo - imposto)
   

    document.getElementById('resposta').innerHTML = "Para a Pizaa " + nomePizza + " o lucro liquido é de R$" + lucro + "e o imposto é de "+ imposto; 
}