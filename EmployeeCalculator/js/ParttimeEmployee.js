class ParttimeEmployee extends Employee {
    constructor(baseSalary, hoursWorked, hourlyRate) {
        super(baseSalary);
        this.hoursWorked = hoursWorked;
        this.hourlyRate = hourlyRate;
    }

    calculateSalary() {
        return this.baseSalary + (this.hoursWorked * this.hourlyRate);
    }
}