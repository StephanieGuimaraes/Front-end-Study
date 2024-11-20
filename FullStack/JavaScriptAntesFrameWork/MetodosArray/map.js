/* O método map() chama a função callback recebida por parametro para cada elemento
do array com base nos retornos de cada chamada. E no final, devolve o novo array */

const products = ["Teclado", "Mouse", "Monitor"]

//Percorrendo os itens de um array
products.map((product)=>{
    console.log(product)
})

//Sintaxe reduzida
products.map((product)=>console.log(product))

//Utilizando o novo objeto retornado
const formatted = products.map((product)=>{
    return product.toUpperCase()
})
console.log(formatted)

const formattedS = products.map((product)=>{
    return {
        id: Math.random(),
        description: product,
    }
})
console.log(formattedS)