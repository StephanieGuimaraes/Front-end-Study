1. Criação de tipo e objeto simples
//Crie um type chamado Book com as propriedades:
//title (string)
//author (string)
//yearPublished (number)
//Depois, crie uma variável myBook do tipo Book e atribua valores a ela.

type book = {
    title: string,
    author: string,
    yearPublished: number
}

let myBook: book = {
    title: "O as montanhas azuis",
    author: "José",
   yearPublished: 2013
}

console.log(myBook)


//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
2. Propriedade opcional
//Crie uma interface chamada Person com as propriedades:
//name (string)
//age (number)
//nickname (string) opcional
//Depois, crie dois objetos: um com nickname preenchido e outro sem essa propriedade.

interface Person {
    name: string,
    age: number,
    nickname?: string
}

let person: Person = {
    name: "Stephanie",
    age: 29,
    nickname: "Steph"
}

let person2: Person = {
    name: "Stephanie",
    age: 29,
}

//console.log({person, personName2: person2.name})
const { name: personName2 } = person2;
console.log(person, personName2)


//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
3. Erro de propriedade inexistente
Crie um objeto movie com as propriedades title (string) e year (number).
Depois, tente acessar movie.director e veja o erro que o TypeScript retorna.

const movie = {
    title: "Kill Bill",
    year: 2005
}

console.log(movie.director)


//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
4. Qual a diferença entre tipagem explícita e inferência de tipos no TypeScript?

Tipagem explícita é quando é deixado claro no código o tipo da variável, usando anotações de tipo como boolean, number, string e etc.. tipagem por inferência é quando é deixado para o próprio typeScript decidir qual o tipo da variavel por inferencia, por exemplo: 
    const person = 
    { 
        name: "Steph", 
        age: 29 
    } 

com um objeto declarado dessa forma o typescript vai inferir que os tipos das variaveis name e age são uma string e number respectivamente.


//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
5. Escreva um código que declare uma variável price do tipo number e uma variável productName sem definir o tipo explicitamente, atribuindo valores a ambas.

    const price: number = 8; 
    const productName = "Steph"


//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
6. O que o TypeScript faz quando não definimos o tipo de uma variável e não atribuimos valor inicial? Qual é o tipo padrão atribuído?

Quando você declara uma variável sem atribuir valor e sem definir o tipo, o TypeScript não atribui undefined como tipo, mas sim o tipo especial any. O valor inicial será undefined, mas o tipo será any.


//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
7. Crie uma variável isAdmin com tipagem explícita boolean e atribua true a ela.
Depois, tente atribuir uma string para ver o erro que o TypeScript retorna.

let isAdmin: boolean = true
isAdmin = "sim" // ❌ Type 'string' is not assignable to type 'boolean'

//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
8. Crie uma variável username sem definir o tipo explicitamente, atribuindo o valor "Stephanie".
Depois, tente atribuir um número a essa variável e observe o erro.

let username = "Stephanie" // inferência: string
username = 123 // ❌ Type 'number' is not assignable to type 'string'

//---------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------
9. Crie uma variável data sem valor inicial e sem definir tipo.
Atribua a ela primeiro um número, depois uma string e por fim um boolean, e explique qual o tipo que o TypeScript considera nessa situação.

Se você declara assim:

let data;

O valor final pode até ser boolean, mas o tipo continua sendo any durante todo o tempo. Isso é perigoso porque o TS deixa de verificar compatibilidade de tipos.