const num1 = 6;
const num2 = 6;
const num3 = 1;

function maiorDeles(x, y, z){
    if(x>y && x>z){
        console.log("num1 é o maior")
    }else if(y>z){
        if(y==x){
            console.log("num2 é igual a num1 e eles são os maiores")
        }else{
            console.log("num2 é o maior")
        }
    }else{
        if(z==x || z==y){
            console.log("num3 é igual a num1 ou num2 e eles são os maiores")
        }else{
            console.log("num3 é o maior")
        }
        
    }
}
maiorDeles(num1, num2,num3);