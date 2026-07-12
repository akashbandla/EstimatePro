// Employees Object
let employees = [
    {
    name    : "Satya",
    salary  : 1500000,
    projectAllocated: false
    },
    {
    name    : "Rupesh",
    salary  : 1800000,
    projectAllocated: false
    },
    {
    name    : "Rupesh",
    salary  : 1800000,
    projectAllocated: true,
    projectCompletionDate: "2026/08/10"
    },
    {
    name    : "Keerthi",
    salary  : 2800000,
    projectAllocated: true,
    projectCompletionDate: "2026/08/20"
    },
];

// Employees Filter function which takes employees and query as input and return corresponsing filtered employees object
function employeesFilter(employees, query){
    const salary = query?.salary
    const projectAllocated = query?.projectAllocated

    if (salary != undefined && projectAllocated!= undefined){
        // Filtering Employees Based on the salary range
        let filterdEmployees = employees.filter((employee)=> employee.salary <= salary)

        // Filtering the resultant employees based on the Project Allocation
        filterdEmployees = filterdEmployees.filter((employee)=> employee.projectAllocated === projectAllocated)
        
        return filterdEmployees

    }else if (salary!=undefined){
        // Filtering Employees Based on the salary range
        let filterdEmployees = employees.filter((employee)=> employee.salary <= salary)

        return filterdEmployees

    }else if (projectAllocated!=undefined){
        // Filtering the employees based on the Project Allocation
        let filterdEmployees = employees.filter((employee)=>employee.projectAllocated === projectAllocated)

        return filterdEmployees

    }

}

// Sample Queries
const query1 = { salary : 1800000 }
const query2 = { projectAllocated:false }
const query3 = { projectAllocated:true }
const query4 = { salary:1500000, projectAllocated:false }
const query5 = { salary:2800000, projectAllocated:false }

// Employees Filter Function caller with employees and query as inputs
result = employeesFilter(employees, query5)

// Printing result on the console
console.log(result)