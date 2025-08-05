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
