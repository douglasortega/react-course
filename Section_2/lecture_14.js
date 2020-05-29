/*
    Arrow Functions
*/

// Normal function
function printName(name){
    console.log(name);
}

printName('Douglas Ortega');

// Arrow Function
const printMyName = (name) => {
    console.log(name);
}

printMyName('Douglas Ortega');

// Arrow Function multiple arguments
const printMyName_2 = (name, age) => {
    console.log(name, age);
}

printMyName_2("Douglas", 30);

// One Liner Arrow Function
const multiply = (number) => number * 2;

console.log(multiply(2));

