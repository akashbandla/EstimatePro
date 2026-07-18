'use strict'

const {
    WORKING_DAYS_PER_MONTH,
    WORKING_DAYS_PER_WEEK
} = require('../config/constants')

/**
 * Converts the given months/Days into Number Of weeks
 * @param {Object} options(months/days)
 * @returns {Object} converted Weeks
 */
function weeksCalculator(options){
    const months = options?.months
    const days = options?.days

    // if input has months then corresponding weeks for those months will be calculated
    if (months!= undefined){
        const total_days = months * WORKING_DAYS_PER_MONTH
        const total_weeks = total_days / WORKING_DAYS_PER_WEEK

        return {weeks : total_weeks}
    }

    // if input has days then corresponding weeks for those days will be calculated
    if (days!= undefined){
        const total_weeks = days / WORKING_DAYS_PER_WEEK
        return {weeks : total_weeks}
    }

    if(months=== undefined && days=== undefined){
        return 'Please provide atleast months or days as input'
    }

}