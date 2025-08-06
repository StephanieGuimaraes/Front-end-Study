ReadME Typescript>

let user: {name: string, age: number} = { name: "Rodrigo", age: 30}

function signIn({ email, password }:{email: string, password: string}){
    
}


//---------------------------------------------------------
Interface--------------

interface Product {
    id: number,
    name: string
}

function newProduct(product: Product){
console.log("Prod: ", product)
}

newProduct({id: 1, name: "Jos"})

//----------------------------------------------------------
Interface extends---------------------

interface Person {
    id: number,
    name: string
}

interface Teacher extends Person {
    subjects: string[]
}

interface Student extends Person {
    age: number,
}

let teacher: Teacher = {id: 1, name: "Rodrigo", subjects:["JavaScript", "Typescript"]}

//------------------------------------------------------------
Type e intersecção de tipos-------------------

type Person = {
    id: number,
    name: string
}

type Teacher = Person & {
    subjects: string[]
}

type Student = Person & {
    age: number
}

let teacher: Teacher
let student: Student

//--------------------------------------------------------------
Asserção de tipos---------------

Nessa aula, veremos o conceito de type assertion no TypeScript, que permite definir a tipagem de um objeto quando o TypeScript não consegue inferir. 
Veremos um exemplo de uso de type assertion para consumir APIs e converter tipos de objetos.
Como se fosse uma conversão de um objeto que o typescript não tem como saber o valor, para tipos previamente definidos

type UserResponse = {
    id: number;
    name: string;
    avatar: string;
}

let userResponse = {} as UserResponse;

//----------------------------------------------------------------
Restrigindo valores------------------------------

Nessa aula, aprenderemos a utilizar o type para restringir os valores disponíveis em uma variável. Ao definir os valores possíveis, como "small", "medium" e "large", podemos limitar as opções aceitáveis. Isso ajuda a evitar erros e garantir que apenas os valores desejados sejam utilizados. Ao utilizar essa estratégia, podemos restringir as opções disponíveis e garantir a consistência dos dados utilizados em nosso código.

type Size = "small" | "medium" | "large"

let size: Size

size = "small"