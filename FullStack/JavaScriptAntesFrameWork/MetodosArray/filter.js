// O método filter() cria um novo array com todos os elementos que passaram na condição

const words = ["Javascript", "html", "CSS", "Web"]

//Filtrando palavras que tenham mais do que 3 letras
const result = words.filter((word)=> word.length >3)
console.log(result)

const products = [
    { description: "Teclado", price: 150, promotion: true },
    { description: "Mouse", price: 70, promotion: false },
    {description: "Monitor", price: 900, promotion: true },
]

const promotion = products.filter((product)=>product.promotion === true)
console.log("Promoção: ", promotion)