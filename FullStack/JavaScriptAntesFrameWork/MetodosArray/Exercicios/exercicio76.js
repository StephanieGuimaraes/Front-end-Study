/* Exercício 76: Crie um objeto vazio e adicione três propriedades a ele, 
cada uma com diferentes tipos de valores. */

let obj = {
    num: 12,
    stri: "ola",
    boo: true,
}
console.log(obj)

/* Exercício 77: Crie um objeto que represente um livro, com propriedades para o título, autor e número de páginas. 
Em seguida, adicione um método ao objeto que imprima uma descrição do livro. */

const livro = {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    pags: 310,
    descrição: function(){
        console.log(`O livro ${this.titulo}, escrito por ${this.autor}, possui ${this.pags} páginas`)
    },
}
livro.descrição()
