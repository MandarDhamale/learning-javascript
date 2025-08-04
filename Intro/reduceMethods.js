let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbersCount = numbers.reduce((acc, curVal) =>{
    if(curVal % 2 === 0){
        acc++;
    }
    return acc;
}, 0);

// console.log(evenNumbersCount);


let n = [
    {number:1, type: "square"},
    {number:2, type: "cube"},
    {number:3, type: "square"},
    {number:4, type: "cube"},
    {number:5, type: "square"}
]

let squareCount = n.reduce((acc, curval) =>{
    if(curval.type === "cube"){
        acc++;
    }
    return acc;
}, 0);

console.log(squareCount);