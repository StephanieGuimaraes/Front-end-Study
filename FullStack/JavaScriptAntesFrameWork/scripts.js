/*O strict mode (modo estrito): ativando esse modo os erros 
que eram silenciosos passa a gerar exceçoes no JavaScript*/

"use strict"

//-----------------------------------------------------
function showMessage(){
    let personName = "Rodrigo Gonçalves"
    console.log("Olá", personName)
}

showMessage()

//-----------------------------------------------------
// tenta mudar uma propriedade somente leitura
class Student {
    get point(){
        return 7
    }
}
let student = new Student()
//student.point = 10
console.log(student.point)

//-----------------------------------------------------
//Tenta deletar a propriedade de um objeto que não posso deletar
delete window.document

//-----------------------------------------------------
//Quando passamos parametros duplicados
function sum(a, a, c){
    return a + a + c
}
const result = sum(1, 3, 2) //3 + 3 +2 = 8
console.log("RESULTADO:", result) 