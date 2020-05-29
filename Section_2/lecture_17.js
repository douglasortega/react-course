// Classes, Properties and Method
// Next Gen Javascript

class Human{
    gender = 'male';

    printGender = () =>{
        console.log(this.gender);
    }
}

class Person extends Human{

    name = 'Douglas';


    printName = () => {
        console.log(this.name);
    }
}


const person = new Person();
person.printName();
person.printGender();