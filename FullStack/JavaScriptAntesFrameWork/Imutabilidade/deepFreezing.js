/*Uma função recursiva que chama cada propriedade 
do objeto para congelar essa propriedade*/

const book ={
    title: "Objetos Imutáveis",
    category: "javascript",
    author: {
        name: "Rodrigo",
        email: "rodrigo@email.com",
    },
}

function deepFreeze(object){
    // Obtém um array com todas as propriedades do objeto
    const props = Reflect.ownKeys(object)
    //console.log(props)
    //Itera sobre todas as propriedades do objeto
    for(const prop of props){
        const value = object[prop]
        if(value && typeof value === "object" || typeof value === "function"){
            deepFreeze(value)
        }
    }
    return Object.freeze(object)
}

deepFreeze(book)

book.category = "HTML"
book.author.name = "Joao"
console.log(book)