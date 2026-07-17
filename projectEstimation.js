'use strict'

// imports
const { salaryBreakdown } = require('./utils/salaryBreakDown');
const { employeesFilter } = require('./utils/employeesFilter');

const {
    PROJECT_TIME_LINE,
    WORKING_HOURS_PER_MONTH
}= require('./config/constants')


// Step-1: Get the available employees
const notAllocatedEmployees = employeesFilter({projectAllocated:false})


// Step-2: Calculate the Sum of All the Eligible Employees Per Hour Rate
const budgetForAllEmployeesPerHour = notAllocatedEmployees.reduce(
    (totalPerHourRate, employee) => totalPerHourRate + salaryBreakdown(employee.salary),
    0
);


// Step-3: Calculate the Total Budget for Given Project Time Line
const projectBudget = budgetForAllEmployeesPerHour * WORKING_HOURS_PER_MONTH * PROJECT_TIME_LINE


console.log(`Total Project Budget for ${notAllocatedEmployees.length} available Employees for ${PROJECT_TIME_LINE} months is ${projectBudget.toFixed(2)}`)