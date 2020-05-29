const number = 1;
const num2 = number;

//1
console.log(num2);

const person = {
    name: "Douglas"
};

const secondPerson = person;

person.name = "Jose";

/*
[object Object]{
    name: "Jose"
}
This copied in a mutable way.
*/
console.log(secondPerson);

// To update the copied value in an inmutable way.

const secondPerson2 = {
    ...person
};

person.name = "Jose";

/*
[object Object]{
    name: "Douglas"
}
*/
console.log(secondPerson2);