const patients = [
    {
        nome: "Carlos",
        idade: "33",
        peso: 70,
    },
    {
        nome: "Maria",
        idade: "43",
        peso: 80,
    },
    {
        nome: "Bia",
        idade: "23",
        peso: 50,
    }
]

let patientNames = []
let patientAge = []
for(let patient of patients){
    patientNames.push(patient.nome)
    patientAge.push(patient.idade)
}
alert("Lista: " + patientNames
    + "  Idade: " + patientAge
)
console.log("teste: ", patientNames)