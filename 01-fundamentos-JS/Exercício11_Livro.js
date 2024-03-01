/*Exercício 11: Escreva um programa que verifica 
se uma pessoa pode votar com base na idade*/

const idade = 70;

function voto(idade){
    if(18<=idade && idade<70){
        console.log("obrigatório")
    }else if(16<=idade && idade<=17 || idade>=70){
        console.log("facultativo")
    }else if(idade<16){
        console.log("não votam")
    }
}

voto(idade);