document.addEventListener('DOMContentLoaded', () => {
    const vehicleType = document.getElementById('vehicleType');
    const carFields = document.getElementById('carFields');
    const bikeFields = document.getElementById('bikeFields');
    const calculateBtn = document.getElementById('calculateBtn');
    const result = document.getElementById('result');

    vehicleType.addEventListener('change', (e) => {
        carFields.classList.add('hidden');
        bikeFields.classList.add('hidden');

        if (e.target.value === 'car') {
            carFields.classList.remove('hidden');
        } else if (e.target.value === 'bike') {
            bikeFields.classList.remove('hidden');
        }
    });

    calculateBtn.addEventListener('click', () => {
        let efficiency = 0;
        
        if (vehicleType.value === 'car') {
            const engineCapacity = parseFloat(document.getElementById('engineCapacity').value);
            const fuelConsumption = parseFloat(document.getElementById('fuelConsumption').value);
            const car = new Car(engineCapacity, fuelConsumption);
            efficiency = car.calculateEfficiency();
            result.innerHTML = `Fuel Efficiency: ${efficiency} km/L`;
        } else if (vehicleType.value === 'bike') {
            const mileage = parseFloat(document.getElementById('mileage').value);
            const distance = parseFloat(document.getElementById('distance').value);
            const bike = new Bike(mileage, distance);
            efficiency = bike.calculateEfficiency();
            result.innerHTML = `Fuel Efficiency: ${efficiency} km/L`;
        }

        result.classList.remove('hidden');
    });
});