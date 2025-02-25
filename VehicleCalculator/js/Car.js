class Car extends Vehicle {
    constructor(engineCapacity, fuelConsumption) {
        super();
        this.engineCapacity = engineCapacity;
        this.fuelConsumption = fuelConsumption;
    }

    calculateEfficiency() {
        return (100 / this.fuelConsumption).toFixed(2);
    }
}