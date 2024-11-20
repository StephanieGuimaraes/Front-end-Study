/* Destructuing assigment (desestruturação) permite extrair dados de arrays 
ou objetos em variaveis distintas */

const data = ["Stephanie Guimaraes", "steph@gmail.com"]

//Desestruturando array
const [username, email] = data
console.log("Nome: ", username)
console.log("email: ", email)

const fruits = ["Banana", "Apple", "Orange"]

const [banana] = fruits
console.log(banana)

const [_,apple] = fruits
console.log(apple)

const [,,orange] = fruits
console.log(orange)