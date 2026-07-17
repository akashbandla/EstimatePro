'use strict'

const config = require('../config/constants')

const workingDaysPerMonth = config.WORKING_DAYS_PER_MONTH
const workingDaysPerWeek  = config.WORKING_DAYS_PER_WEEK

function weeksCalculator(options){
    const months = options?.months
    const days = options?.days

    // if input has months then corresponding weeks for those months will be calculated
    if (months!= undefined){
        const total_days = months * workingDaysPerMonth
        const total_weeks = total_days / workingDaysPerWeek

        return {weeks : total_weeks}
    }

    // if input has days then corresponding weeks for those days will be calculated
    if (days!= undefined){
        const total_weeks = days / workingDaysPerWeek
        return {weeks : total_weeks}
    }

    if(months=== undefined && days=== undefined){
        return 'Please provide atleast months or days as input'
    }

}