'use strict'

const {
    STANDARD_DEDUCTION,
    MONTHLY_PF_DEDUCTION,
    MONTHLY_PT_DEDUCTION,
    CHESS_RATE,
    TOTAL_MONTHS_PER_YEAR,
    WORKING_DAYS_PER_MONTH,
    WORKING_HOURS_PER_MONTH,
    TAX_SLABS,
    WORKING_HOURS_PER_DAY
}= require('../config/constants')


/**
 * getHourlySalary function calculates the hourly salary for the gross Annum salary after Applying the TDS
 * @param {*} annualSalary - Employee Gross Annual Salary
 * @returns hourlySalary - After all TDS applies on the Annual Salary
 */
function salaryBreakdown(annualSalary){
    // Step 1: Taxable Income 
    const taxableIncome = annualSalary - STANDARD_DEDUCTION;

    let tax = 0;
    let remainingIncome = taxableIncome;

    // Step 2: Calculate Tax for taxableIncome
    for (let slab of TAX_SLABS){
        if (remainingIncome <= 0) break;
        const taxSalary = Math.min(remainingIncome, slab.range)
        tax += (taxSalary * slab.taxRate);
        remainingIncome -= taxSalary
    }

    // Step 3: Health & Education Cess @ 4%
    const cess = tax * CHESS_RATE;
    const totalTax = tax + cess;

    // Step 4: Monthly Tax
    const monthlyTax = totalTax / TOTAL_MONTHS_PER_YEAR;

    // Step 5: Monthly Gross Salary
    const monthlyGrossSalary = annualSalary / TOTAL_MONTHS_PER_YEAR;

    // Step 6: Monthly Net Salary
    const monthlyNetSalary = monthlyGrossSalary - monthlyTax - MONTHLY_PF_DEDUCTION - MONTHLY_PT_DEDUCTION;

    // Step 7: Hourly Salary
    const totalMonthlyHours = WORKING_DAYS_PER_MONTH * WORKING_HOURS_PER_DAY;
    const hourlySalary = monthlyNetSalary / totalMonthlyHours;

    return hourlySalary
}


module.exports ={
    salaryBreakdown
}