let request = new XMLHttpRequest();

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
request.send();

// setTimeout(() => {
//     console.log(request.responseText);
// },1000);

// console.log(request.responseText);

request.addEventListener('readystatechange', () => {
    if(request.readyState === 4 && request.status === 200){
        console.log(request.responseText);
    }
})