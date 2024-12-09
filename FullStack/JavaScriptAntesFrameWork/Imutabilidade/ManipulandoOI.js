const book ={
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Rodrigo",
        email: "rodrigo@email.com",
    },
}

const updateBook = {
    ...book,
    category: "Frontend",
    author: {
        ...book.author,
        name: "Joao",
        idade: "16"
    }
}
console.log(book)
console.log(updateBook)