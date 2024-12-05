const address1 = {
    street: "Av. Brasil",
    number: 20,
}

//Isso não é uma cópia é uma referência
// const address2 = address1
// address2.number = 30


//Aqui estamos criando um novo objeto utilizando as propriedades e valores de address1
// const address2 = {...address1 }
// address2.number = 30

//ou usar no formato abaixo
// const address2 = { ...address1, number: 30}

// console.log(address1, address2)

const list1 = ["Apple", "Banana"]

//exemplo de referencia de array
const list2 = list1
list2.push("Watermelon")

console.log(list1, list2)