class Employee {
    constructor(name, id, basesalary) {
        this.name = name;
        this.id = id;
        this.basesalary = basesalary;
    }

    getDetails() {
        console.log(`Name: ${this.name} ID: ${this.id} Salary: ${this.basesalary}`);
    }

    calculateSalary() {
        return this.basesalary;
    }
}

class FulltimeEmployee extends Employee {
    constructor(name, id, basesalary, bonus) {
        super(name, id, basesalary);
        this.bonus = bonus;
    }

    calculateSalary() {
        return this.basesalary + this.bonus;
    }
}

class ParttimeEmployee extends Employee {
    constructor(name, id, basesalary, hoursworked, rate) {
        super(name, id, basesalary);
        this.hoursworked = hoursworked;
        this.rate = rate;
    }

    calculateSalary() {
        return this.basesalary + (this.hoursworked * this.rate);
    }
}

const fullTimer = new FulltimeEmployee("John", "E001", 5000, 1000);
const partTimer = new ParttimeEmployee("Jane", "E002", 2000, 20, 100);
fullTimer.getDetails();
partTimer.getDetails();

console.log(`${fullTimer.name}'s total salary: ${fullTimer.calculateSalary()}`);
console.log(`${partTimer.name}'s total salary: ${partTimer.calculateSalary()}`);