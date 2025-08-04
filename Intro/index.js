// alert('Alert');
// console.log('log');

const names = ['mandar', 'makarand', 'manik', 'vijaya'];

for(let i = 0; i<names.length; i++){
    console.log(names[i]);
}

i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

// code runs at least once and then checks the condition 
do{
    input = prompt("Do you want to exit the program?");
    console.log("input: ", input);
}while(input != 'exit')

let grade = 'A';

switch(grade){
    case 'A':
        console.log('Excellent');
        break;
    case 'B':
        console.log('Good');
        break;
    default:
        console.log('Invalid');
}