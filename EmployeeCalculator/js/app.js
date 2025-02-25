document.addEventListener('DOMContentLoaded', () => {
    const employeeType = document.getElementById('employeeType');
    const fulltimeFields = document.getElementById('fulltimeFields');
    const parttimeFields = document.getElementById('parttimeFields');
    const calculateBtn = document.getElementById('calculateBtn');
    const result = document.getElementById('result');

    employeeType.addEventListener('change', (e) => {
        fulltimeFields.classList.add('hidden');
        parttimeFields.classList.add('hidden');

        if (e.target.value === 'fulltime') {
            fulltimeFields.classList.remove('hidden');
        } else if (e.target.value === 'parttime') {
            parttimeFields.classList.remove('hidden');
        }
    });

    calculateBtn.addEventListener('click', () => {
        let salary = 0;
        
        if (employeeType.value === 'fulltime') {
            const baseSalary = parseFloat(document.getElementById('baseSalary').value) || 0;
            const bonus = parseFloat(document.getElementById('bonus').value) || 0;
            const employee = new FulltimeEmployee(baseSalary, bonus);
            salary = employee.calculateSalary();
        } else if (employeeType.value === 'parttime') {
            const baseSalary = 0; // Base salary for part-time is typically 0
            const hourlyRate = parseFloat(document.getElementById('hourlyRate').value) || 0;
            const hoursWorked = parseFloat(document.getElementById('hoursWorked').value) || 0;
            const employee = new ParttimeEmployee(baseSalary, hoursWorked, hourlyRate);
            salary = employee.calculateSalary();
        }

        result.classList.remove('hidden');
        result.innerHTML = `Calculated Salary: $${salary.toFixed(2)}`;
    });
});