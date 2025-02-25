class Car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    display(){
        console.log(`Brand: ${this.brand} Model: ${this.model}`);
    }

}
const car = new Car('Toyota', 'Corolla');
console.log(car.display());
console.log('First file executed successfully');