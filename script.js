class Person {
    constructor(name, age) {
        this._name = name; // Store name in a private variable
        this._age = age;   // Store age in a private variable
    }

    get name() {
        return this._name; // Getter for name
    }

    set age(value) {
        this._age = value; // Setter for age
    }

    get age() {
        return this._age; // Getter for age if you need to access it
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying`); // Log studying
    }
}

class Teacher extends Person {
    teach() {
        console.log(`${this.name} is teaching`); // Log teaching
    }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
