let user = { 
    name: 'Mandar',
    email: 'mrd@gmail.com',
    gender: 'male',
    getDetails: function() {
        console.log(`Name: ${this.name}, Email: ${this.email}, Gender: ${this.gender}`);
    }
};

let email_property = 'email';
console.log(user.name);
console.log(user[email_property]);
console.log(user.gender);

console.log("*****************************")

user.getDetails();