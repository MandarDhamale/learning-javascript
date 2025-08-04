let numbers = [10, 29, 92, 38, 8, 18, 2, 9, 1, 7, 98];
// console.log(numbers);
// numbers.sort();
// console.log(numbers);

let products = [
    {name:"shoe", price:10},
    {name:"car", price:10000},
    {name:"pencil", price:1},
    {name:"tv", price:2000},
    {name:"phone", price:1000},
]

// console.log(products);
// products.sort();
// console.log(products);

products.sort((a,b) => {
    if(a.price > b.price){
        return 1;
    }else if(a.price < b.price){
        return -1;
    }else{
        return 0;
    }
}).reverse();

// console.log(products);

let names = ["mandar", "manik", "vijaya", "makarand", "priyal"];
console.log(names);
names.sort();
console.log(names);