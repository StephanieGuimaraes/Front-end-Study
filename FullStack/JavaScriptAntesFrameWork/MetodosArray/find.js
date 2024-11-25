/* O método find() retorna o valor do primeiro elemento
 do array que satisfizer a condição. Caso contrario, undefined 
 é retornado*/

 const values = [5, 12, 8, 130, 44]

 const found = values.find((value)=>value > 12)
 console.log("valor: ", found)

 const products = [
    { description: "Teclado", price: 150, promotion: true },
    { description: "Mouse", price: 70, promotion: false },
    {description: "Monitor", price: 900, promotion: true },
]

const result = products.find((produto)=>produto.description === "Mouse")
console.log(result)