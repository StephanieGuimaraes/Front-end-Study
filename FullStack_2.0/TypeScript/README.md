ReadME Typescript>

let user: {name: string, age: number} = { name: "Rodrigo", age: 30}

function signIn({ email, password }:{email: string, password: string}){
    
}


//---------------------------------------------------------
Interface--------------

interface Product {
    id: number,
    name: string
}

function newProduct(product: Product){
console.log("Prod: ", product)
}

newProduct({id: 1, name: "Jos"})

//----------------------------------------------------------

