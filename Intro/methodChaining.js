let names = ["mandar", "manik", "vijaya", "makarand", "priyal"];

let students = names
  .filter((name) => name != "manik")
  .map((name) => name.toUpperCase())
  .sort()
  .reverse();
console.log(students);
