const repository = require('./uf.file.respository')

const getAll = () => {
    return repository.getAll()
}

const getByDate = (date) => {
    return repository.getByDate(date)
} 

const getByDateRange = (dateFrom, dateTo) => {
    return repository.getByDateRange(dateFrom, dateTo)
}

module.exports = {
    name: 'UF',
    getAll: getAll,
    getByDate: getByDate,
    getByDateRange: getByDateRange,
    refresh: repository.refresh,
}