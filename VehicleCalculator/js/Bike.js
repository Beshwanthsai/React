class Bike extends Vehicle {
    constructor(mileage, distance) {
        super();
        this.mileage = mileage;
        this.distance = distance;
    }

    calculateEfficiency() {
        return this.mileage.toFixed(2);
    }
}