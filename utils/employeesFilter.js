'use strict'

const employeeConfig = require('../data/employeesData')

const employees = employeeConfig.EMPLOYEES_DATA

/**
 * Employees Filter function which takes query as input and return corresponsing filtered employees object
 * @param {object} query is object which contains the filters
 * @returns filteredEmployees respectives to filters
 */
function employeesFilter(query){
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


module.exports = {
    employeesFilter
}
