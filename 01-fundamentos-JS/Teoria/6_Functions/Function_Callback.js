function Name(name){
    console.log("antes da callback")
    num = name()
    console.log("num: ", num)
    console.log("depois da callback")
}

Name(()=>{
    console.log("durante a callback") 
    return 2+3;
})