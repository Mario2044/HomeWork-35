class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  class Car {
    constructor(brand, model, year, plate) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.plate = plate;
      this.owner = null;
    }
    
    assignOwner(owner) {
      if (owner.age >= 18) {
        this.owner = owner;
      } else {
        console.log("The owner must be at least 18 years old");
      }
    }
    
    displayInfo() {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Plate: ${this.plate}`);
      if (this.owner) {
        console.log("Owner:");
        this.owner.displayInfo();
      }
    }
}
  
const person1 = new Person("John Doe", 25);
const person2 = new Person("Jane Smith", 30);

const car1 = new Car("Toyota", "Camry", 2010, "ABC123");
const car2 = new Car("Ford", "Mustang", 2020, "XYZ789");

car1.assignOwner(person1);
car2.assignOwner(person2);

console.log("Car 1:");
car1.displayInfo();
console.log("Car 2:");
car2.displayInfo();
