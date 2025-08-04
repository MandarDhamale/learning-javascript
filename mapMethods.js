let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sqNumber = numbers.map(number => number * number);
// console.log(sqNumber);

let n = [
    {number:1, type: "square"},
    {number:2, type: "cube"},
    {number:3, type: "square"},
    {number:4, type: "cube"},
    {number:5, type: "square"}
]


let processedNumbers = n.map(number => {
    if(number.type === "square"){
        return number.number ** 2;
    }
    if(number.type === "cube"){
        return number.number ** 3;
    }
})

console.log(n, processedNumbers);

