const frase = "ola mundo"
const invertido = (frase)=>{
   return (frase.split("").reverse().join(""))
}

console.log(invertido(frase));