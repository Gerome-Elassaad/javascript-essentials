const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
    // More employee records can be added here
];

// Function to display all employees
function displayAllEmployees() {
    const allEmployeesHTML = employees.map(employee =>
        `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
    ).join('');
    document.getElementById('employeesDetails').innerHTML = allEmployeesHTML;
}

// Function to calculate and alert total salaries
function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display employees in the HR department
function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    if (hrEmployees.length > 0) {
        const hrEmployeesHTML = hrEmployees.map(employee =>
            `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`
        ).join('');
        document.getElementById('employeesDetails').innerHTML = hrEmployeesHTML;
    } else {
        document.getElementById('employeesDetails').innerHTML = '<p>No employees found in the HR department.</p>';
    }
}

// Function to find an employee by their ID
function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =
            `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    } else {
        document.getElementById('employeesDetails').innerHTML =
            '<p>No employee found with this ID.</p>';
    }
}
