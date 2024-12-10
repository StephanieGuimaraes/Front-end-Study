 // Função que retorna uma Promise
 function asyncFunction(){
    return new Promise((resolve, reject) => {
        // Simula uma operação assíncrona.
        setTimeout(() => {
            const isSuccess = false

            if(isSuccess){
                resolve("A operação foi concluída com sucesso!")
            } else {
                reject("Algo deu errado!")
            }
        }, 3000)
    })
 }

 console.log(asyncFunction())
 console.log("Executando função assíncrona...")

 asyncFunction().then((response)=>{
    console.log("Sucesso: ", response)
 }).catch((error) => {
    console.log("Erro: ", error)
 }).finally(()=>{
    console.log("Fim da execução")
 })