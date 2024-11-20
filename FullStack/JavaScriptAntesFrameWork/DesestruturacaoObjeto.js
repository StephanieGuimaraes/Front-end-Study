/* destructuring assignment (desestruturação) permite 
extrair dados de arrays ou objetos em variáveis distintas */

const product = {
    name: "Teclado",
    price: 150,
}

const { name, price } = product
console.log("Nome: ", name)
console.log("Preço: ", price)


//Uso comum de uma função e sua chamada com argumentos
function newProduct(name, price){
    console.log("## NOVO PRODUTO ##")
    console.log("Nome: ", name)
    console.log("Preço: ", price)
}

newProduct("Mouse", 70)

//Uso de desestruturação em funcoes
function newProductD({name, price}){
    console.log("## NOVO NOVO PRODUTO ##")
    console.log("Nome: ", name)
    console.log("Preço: ", price)
}

newProductD({
    price: 20, 
    name: "som",
})
