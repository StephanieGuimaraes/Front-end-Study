/* findIndex(): responsável por retornar o índice do primeiro elemento 
que satisfaz uma condição em um array. Se nenhum elemento satisfizer a 
condição, ele retorna "-1". É importante lembrar que o índice retornado 
começa em 0. O método utiliza uma função de callback para percorrer o 
array e verificar a condição definida. Caso nenhum elemento satisfaça a 
condição, ele retorna "-1". O findIndex() é útil para encontrar a posição 
do primeiro elemento que atende a uma condição específica no array.*/

const values = [4, 6, 8, 12]

// Obtendo o primeiro index do elemento que o valor é maior que 4
const index = values.findIndex((value)=>value>4)
console.log(index)
console.log(values[index])

//exemplo quando não encontra
console.log(values.findIndex((value)=>value>12))