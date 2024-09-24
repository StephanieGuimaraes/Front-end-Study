let option = Number(prompt(`escolha uma opção: 
    1. cadastrar um item na lista   
    2. Mostrar itens cadastrados    
    3. Sair do programa`))
let items = [];

while(option != 3 && option == 2 || option == 1){
    if(option==1){
        items.push(prompt("Digite o nome do item:"))
    }else{
        if(items.length == 0){
            alert("não possui itens")
        }else(
            alert(items)
        ) 
    }
    option = Number(prompt(`escolha uma opção: 
        1. cadastrar um item na lista   
        2. Mostrar itens cadastrados    
        3. Sair do programa`))
}