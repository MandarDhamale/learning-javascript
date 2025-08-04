let info = fetch("https://jsonplaceholder.typicode.com/todos/1123123123");

info
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    return console.log(response);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
