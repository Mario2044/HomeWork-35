class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    showInfo () {
        console.log(`Имя: ${this.name}`);
        console.log(`Возраст: ${this.age}`);
    }
}

let human1 = new Human("Иван", 25);

human1.showInfo();

