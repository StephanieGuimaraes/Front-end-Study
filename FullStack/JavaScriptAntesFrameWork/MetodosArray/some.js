/* O metodo some() testa se ao menos um dos elementos no array
passa na condiçao e retorna um valor true or false*/

//Exemplo de array de idades
const ages = [15, 30, 39,29]

const result = ages.some((age)=>age <= 14)
console.log("some: ", result)