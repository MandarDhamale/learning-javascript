let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let n = [
  { number: 1, type: 'odd' },
  { number: 2, type: 'even' },
  { number: 3, type: 'odd' },
  { number: 4, type: 'even' },
  { number: 5, type: 'odd' },
  { number: 6, type: 'even' },
  { number: 7, type: 'odd' },
  { number: 8, type: 'even' },
  { number: 9, type: 'odd' },
  { number: 10, type: 'even' }
]


// let evenNumbers = numbers.filter(number => {
//     return number % 2 == 0;
// });

let evenNumbers = n.filter(number => number.type === 'even');

console.log(evenNumbers);