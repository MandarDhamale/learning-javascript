let names = ['MANDAR', 'MANIK', 'MAKARAND', 'VIJAYA'];

const showNames = function(name, index){
    console.log(name, index);
}

names.forEach(showNames);

console.log("******************");

names.forEach(function(name, index){
    console.log(name.toLowerCase(), index);
});