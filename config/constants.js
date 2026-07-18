'use strict';

// ------------------------ Salary & Tax Constants-------------------------------------
const STANDARD_DEDUCTION         = 50000;       // Standard deduction (New Regime)
const MONTHLY_PF_DEDUCTION       = 1800;        // Monthly PF
const MONTHLY_PT_DEDUCTION       = 200;         // Monthly PT
const CHESS_RATE                 = 0.04;

// ------------------ Working Months, Weeks, Days, Hours per Year, Month etc-----------
const TOTAL_MONTHS_PER_YEAR      = 12;
const WORKING_DAYS_PER_MONTH     = 22;
const WORKING_DAYS_PER_WEEK      = 5;
const WORKING_HOURS_PER_MONTH    = 176;         // 176 HOURS
const WORKING_HOURS_PER_DAY      = 8;

// --------Project TimeLine (In future, it will dynamically come from other module)-----
const PROJECT_TIME_LINE          = 2.9;           // 2 MONTHS

// ---------------- Salary Ranges for Employees Filter----------------------------------
const MAX_EMPLOYEE_SALARY        = 2500000;
const MIN_EMPLOYEE_SALARY        = 600000;

// --------------- Experience Ranges for Employee Filter-------------------------------
const MAX_EMPLOYEE_EXPERIENCE    = 7;
const MIN_EMPLOYEE_EXPERIENCE    = 3;

// --------------------------Tax as per New Regime Slabs--------------------------------
const TAX_SLABS = [
    {range:300000, taxRate:0.00},      // Slab 1: 0 - 3,00,000              -> 0%              
    {range:300000, taxRate:0.05},      // Slab 2: 3,00,001 - 6,00,000       -> 5%
    {range:300000, taxRate:0.10},      // Slab 3: 6,00,001 - 9,00,000       -> 10%
    {range:300000, taxRate:0.15},      // Slab 4: 9,00,001 - 12,00,000      -> 15%
    {range:300000, taxRate:0.20},      // Slab 5: 12,00,001 - 15,00,000     -> 20%
    {range:Infinity,taxRate:0.30},      // Slab 6: Above 15,00,000           -> 30% 
];

// ---------------- Designation levels (by Track & experience, in years) --------------
const DESIGNATION_LEVELS = [
    { maxExperience: 2, engineering: 'Software Engineer', qa : 'QA 1'},
    { maxExperience: 5, engineering: 'Software Engineer', qa : 'QA 1'},
    { maxExperience: 9, engineering: 'Lead Engineer', qa : 'Lead Engineer'},
    { maxExperience: Infinity, engineering: 'Project Manager', qa : 'Project Manager'},
];

module.exports = {
    STANDARD_DEDUCTION,
    MONTHLY_PF_DEDUCTION,
    MONTHLY_PT_DEDUCTION,
    CHESS_RATE,
    TOTAL_MONTHS_PER_YEAR,
    WORKING_DAYS_PER_MONTH,
    WORKING_DAYS_PER_WEEK,
    WORKING_HOURS_PER_MONTH,
    WORKING_HOURS_PER_DAY,
    PROJECT_TIME_LINE,
    MAX_EMPLOYEE_SALARY,
    MIN_EMPLOYEE_SALARY,
    MAX_EMPLOYEE_EXPERIENCE,
    MIN_EMPLOYEE_EXPERIENCE,
    TAX_SLABS,
    DESIGNATION_LEVELS,
};