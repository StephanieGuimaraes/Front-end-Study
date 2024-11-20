/* Rest params (...) permite representar um numero 
indefinido de argumentos como um array */

function values(...rest){
    //console.log(a)
    //<ostra a quantidade de parametros
    console.log(rest.length)
    //Exibe o conteudo do array
    console.log(...rest)
    //Exibe o conteudo do rest que é um array
    console.log(rest)
}

values(2, 1, 3, 4)