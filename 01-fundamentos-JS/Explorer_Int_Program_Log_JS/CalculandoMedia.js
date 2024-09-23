const aluno = prompt("Digite o nome do aluno: ")
let NotaOne = Number(prompt("Primeira nota: "))
let NotaTwo = Number(prompt("Segunda nota: "))
let Notatree = Number(prompt("Terceira nota: "))

const media = (NotaOne + NotaTwo + Notatree) / 3

if (media>=6){
    alert("Parabens " + aluno + ", sua nota foi " + media)
}else{
    alert("Sinto muito " + aluno + ",  sua nota foi " + media)
}