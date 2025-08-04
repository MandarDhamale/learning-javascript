const info = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
};

info()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("error: ", error);
  });
