let element = document.querySelector('div').querySelector('p');
let element2 = document.querySelector('body > div > p');
let e3 = document.querySelectorAll('p');

// console.log('element: ', element);
// console.log('element2: ', element2);

e3.forEach(element => {
    console.log(element);
});