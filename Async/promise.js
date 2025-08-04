const demo = () => { 
    return new Promise((resolve,reject) => {

        // resolve("Promise ok!");

        reject("Promise not ok!");

    });
}


demo().then((data) => {
    console.log(data);
}, (err) => {
    console.log(err);
})

demo().then((data) => {
    console.log(data);
}).catch(err => {
    console.error(err);
});