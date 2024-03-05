/*
    Function() constructor
    * expressao new
    * criar um novo objeto
    * this keyword
*/ 

function Person(name, idade){
    this.name = name
    this.idade = idade
    this.walk = ()=>{return ("andando")}
}
const Steph = new Person("Steph", 28)
const Luiz = new Person("Luiz", 30)
console.log(Steph.idade);
console.log(Luiz.idade, Luiz.name, Luiz.walk());