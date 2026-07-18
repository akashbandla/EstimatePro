'use strict'
 
const { getHourlySalary } = require('./utils/salaryBreakDown');
const { getEmployees } = require('./utils/getEmployees');

const { EMPLOYEES_DATA } = require('./data/employeesData')

const {
    MAX_EMPLOYEE_SALARY,
    MIN_EMPLOYEE_SALARY,
    MAX_EMPLOYEE_EXPERIENCE,
    MIN_EMPLOYEE_EXPERIENCE
} = require('./config/constants')

const {
    PROJECT_TIME_LINE,
    WORKING_HOURS_PER_MONTH
} = require('./config/constants')

// Step-1: Get the available employees
const availableEmployees = getEmployees(EMPLOYEES_DATA, { projectAllocated:false })

// Step-2: Calculate the Sum of All the Eligible Employees Per Hour Rate
const budgetForAllEmployeesPerHour = availableEmployees.reduce(
    (totalPerHourRate, employee) => totalPerHourRate + getHourlySalary(employee.salary),
    0
);

// Step-3: Calculate the Total Budget for Given Project Time Line
const projectBudget = budgetForAllEmployeesPerHour * WORKING_HOURS_PER_MONTH * PROJECT_TIME_LINE

console.log(`Total Project Budget for ${availableEmployees.length} available Employees for ${PROJECT_TIME_LINE} months is ${projectBudget.toFixed(2)}`)