let numUser = Number(prompt("adivinhe um numero entre 1 a 10: "))
const randomNum = Math.round(Math.random()*10)
let contador = 1;

while(numUser != randomNum){
    numUser = prompt("Tente novamente: ")
    contador++;
}
alert("Parabens vc acertou em " + contador + " tentativas")

