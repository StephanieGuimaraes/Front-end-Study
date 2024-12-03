/* Ex.1 - You are given an array of numbers representing the ages of a group of people:
Write a function that uses the map() method to return a new array where each age is increased by 2.
*/

// const ages = [18, 21, 30, 16, 25];

// const doubleAge = ages.map((age)=>age + 2)

// console.log(doubleAge)

/* You have an array of objects representing products in a store. Each product has a name and price.
 Write a function that uses the map() method to apply a 10% discount to all products, returning a new 
 array with updated prices rounded to two decimal places. */

 const products = [
    { name: "Laptop", price: 1200 },
    { name: "Smartphone", price: 800 },
    { name: "Tablet", price: 500 },
  ];

const discount = products.map((produto)=>{
    const calc = (produto.price - (produto.price*0.1)).toFixed(2)
    return {
        name: produto.name, 
        price: parseFloat(calc)
    }
}
)
console.log(discount)