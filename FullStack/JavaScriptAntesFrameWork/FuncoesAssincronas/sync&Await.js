 // Função que retorna uma Promise
 function asyncFunction(){
    return new Promise((resolve, reject) => {
        // Simula uma operação assíncrona.
        setTimeout(() => {
            const isSuccess = true

            if(isSuccess){
                resolve("A operação foi concluída com sucesso!")
            } else {
                reject("Algo deu errado!")
            }
        }, 2000)
    })
 }

//  async function fetch() {
//     const response = await asyncFunction()
//     console.log(response)
//  }

 async function fetch() {
    try{
        const response = await asyncFunction()
    console.log("Sucesso: ", response)
    } catch (error) {
        console.log("Erro: ", response)
    }
    console.log("Fim da execução!")
 }

//  const fetch = async () => {
//     const response = await asyncFunction()
//     console.log(response)
//  }

 fetch()