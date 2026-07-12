// constants
const DAYS_PER_MONTH = 22
const DAYS_PER_WEEK  = 5

// Weeks Calculator Function
function weeksCalculator(options){
    const months = options?.months
    const days = options?.days

    // if input has months then corresponding weeks for those months will be calculated
    if (months!= undefined){
        const total_days = months * DAYS_PER_MONTH
        const total_weeks = total_days / DAYS_PER_WEEK

        return {weeks : total_weeks}
    }

    // if input has days then corresponding weeks for those days will be calculated
    if (days!= undefined){
        const total_weeks = days / DAYS_PER_WEEK
        return {weeks : total_weeks}
    }

    if(months=== undefined && days=== undefined){
        return 'Please provide atleast months or days as input'
    }

}

// Weeks Calculator function call with input object
result = weeksCalculator({months:2})

console.log(result)