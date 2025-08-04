const displayData = (callback) => {
  let request = new XMLHttpRequest();

  request.open("GET", "https://jsonplaceholder.typicode.com/todos/234234231");
  request.send();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    }else if(request.readyState === 4){
      callback("Error while calling API", request.responseText);
    }
  });
};

displayData((error, data) => {
  if(error == undefined){
      console.log("Error: None");
      console.log("Response: ");
      console.log(data);
  }else{
      console.log("Error: " + error);
      console.log("Response: ");
      console.log(data);
  }
});