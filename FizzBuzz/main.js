function fizzbuzz() {

    var contador = 1;

    while(contador <= 100 ) {

        var resultado = "";

        if (contador % 3 === 0 && contador % 5 === 0){
            resultado += "FizzBuzz"
        }else if(contador % 3 === 0) {
            resultado += "Fizz";
        }else if(contador % 5 ===0) {
            resultado += "Buzz";
        }else {
            resultado = contador;
        }


    document.write(resultado + "<br>")
    contador++;
    }


}