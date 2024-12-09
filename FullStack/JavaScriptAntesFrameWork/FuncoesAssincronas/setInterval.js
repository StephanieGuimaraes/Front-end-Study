// setInterval() executa uma 
//função após um intervalo de tempo especificado

let value = 10

const interval = setInterval(()=>{
    console.log(value)
    value--
    if(value===0){
        console.log("Feliz ano novo")
        clearInterval(interval)
    }
}, 1000)