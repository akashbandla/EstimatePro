'use strict'

/**
 * Filters Employees based on salaryrange/experienceRange/projectionAllocation 
 * @param {Array<Object>} employees 
 * @param {Object} [query]
 * @param {Boolean} [query.projectAllocated]
 * @param {Object} [query.salary]
 * @param {Object} [query.experience]
 * @returns {Array<Object>} employees based on the query
 */
function getEmployees(employees, { projectAllocated, salary, experience }){

    let filterdEmployees

    if (projectAllocated!=undefined){
        filterdEmployees = employees.filter((employee)=>employee.projectAllocated === projectAllocated)
    }
    
    if (salary!=undefined){
        filterdEmployees = employees.filter((employee)=> employee.salary <= salary.maximum && employee.salary>= salary.minimum)
    }
    
    if (experience!=undefined){
        filterdEmployees = employees.filter((employee)=>employee.experience <= experience.maximum && employee.experience >= experience.minimum)
    }

    return filterdEmployees
}

module.exports = {
    getEmployees
}
