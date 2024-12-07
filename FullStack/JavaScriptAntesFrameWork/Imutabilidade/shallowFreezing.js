const book ={
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Rodrigo",
        email: "rodrigo@email.com",
    },
}

/* O Javascript em si não impoe restrições
a modificação de objetos */

//book.category = "HTML"

// Congela o objeto e impede a modificação.
Object.freeze(book)
book.category = "CSS" //não modifica mais

/* O object.freeze() não impede modificações profundas
em objetos aninhados (shallow freezing). */

book.author.name = "João"
console.log(book)