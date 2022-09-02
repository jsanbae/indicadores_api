const repository = require('./utm.file.respository')

const getAll = () => {
    return repository.getAll()
}

const getMonthly = (year, month) => {
    return repository.getMonthly(year, month)
} 

const getByDateRange = (dateFrom, dateTo) => {
    return repository.getByDateRange(dateFrom, dateTo)
}

module.exports = {
    name: 'UTM',
    getAll: getAll,
    getMonthly: getMonthly,
    getByDateRange: getByDateRange,
    refresh: repository.refresh,
}