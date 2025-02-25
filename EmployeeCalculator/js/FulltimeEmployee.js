class FulltimeEmployee extends Employee {
    constructor(baseSalary, bonus) {
        super(baseSalary);
        this.bonus = bonus;
    }

    calculateSalary() {
        return this.baseSalary + this.bonus;
    }
}