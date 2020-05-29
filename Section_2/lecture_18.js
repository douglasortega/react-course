const numbers = [1,2,3];
const newNumbers = [...numbers, 4];

console.log(newNumbers);

// Result: [1, 2, 3, 4]

const Person = {
    name: 'Douglas'
};

const newPerson = {
    ...person,
    age: 28
}

console.log(newPerson);

/* [object Object] {
    age: 28,
    name: "Douglas"
    }
*/


const filter = (...args) => {
    return args.filter(el => el ===1);
}

console.log(filter(1,2,3));

// [1]


