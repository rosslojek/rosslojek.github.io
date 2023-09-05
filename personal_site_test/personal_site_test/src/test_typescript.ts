// Sample TypeScript code for basic functionality

// This is a change to test if this script is doing anything

// Example function to display a greeting
function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

// Example class representing a person
class Person {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Method to display a greeting
    greet() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

// Example usage
greet("John");

const person = new Person("Alice");
person.greet();
