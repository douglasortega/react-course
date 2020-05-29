// Destructing

// Array Destructing
[a,b] = ['Hello', 'Douglas'];

// Hello
console.log(a);

// Douglas
console.log(b);

// Object Destructing
{name} = { name: 'Douglas', age:28};

// Douglas
console.log(name);

// undefined
console.log(age);

// Example 2
const numbers = [1,2,3];
[num1, num2] = numbers;

//1
//3
console.log(num1, num2);
