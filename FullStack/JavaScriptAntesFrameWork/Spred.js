/* Spred (espalhar) permite que um objeto iteravel, como uma expressao de 
array ou uma string seja expandida para ser usado onde zero ou mais argumentos */

const numbers = [1, 2, 3]

console.log(numbers)
console.log(...numbers)

//array com objetos
const data = [
    {
        name: "Steph",
        email: "steph@gmail.com",
        avatar: "s.png",
    },
    {
        name: "Joao",
        email: "joao@gmail.com",
        avatar: "j.png",
    },
]

console.log(data)

//Utilizando o spred no array com objetos
console.log(...data)