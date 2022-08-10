const fs = require('fs')
const webscraper = require('../../web-scraper/bancocentral.ws')

const repositoryFile = `${__dirname}/../../data/utm.json`
let dataFromFile = []

const getDataFromFile = async () => {
    await createDataFile()

    if (!dataFromFile.length) dataFromFile = JSON.parse(fs.readFileSync(repositoryFile))

    return dataFromFile
}

const createDataFile = async (forceRebuild=false) => {

    if (!forceRebuild && fs.existsSync(repositoryFile)) return
    
    if (fs.existsSync(repositoryFile)) fs.unlinkSync(repositoryFile)

    console.log('Creating Repository File...')
    
    const dataFromWebscraper = await webscraper.getUTMData()
    const jsonString = JSON.stringify(dataFromWebscraper)

    fs.writeFileSync(repositoryFile, jsonString, 'utf8')

    console.log('Repository File created')
}

const getAll = () => {
    return getDataFromFile()
}

const getMonthly = async (year, month) => {
    const utmsData = await getDataFromFile()
    const yearParsed = parseInt(year, 10)
    const monthParsed = parseInt(month, 10)
    
    const utm = utmsData.filter(utmData => (parseInt(utmData.fecha.split('-')[0], 10) === yearParsed) && (parseInt(utmData.fecha.split('-')[1], 10) === monthParsed))

    return (utm) ? utm : {}
} 

const getByDateRange = async (dateFrom, dateTo) => {
    const utmsData = await getDataFromFile()
    const utms = utmsData.filter(utmData => utmData.fecha >= dateFrom && utmData.fecha <= dateTo)

    return (utms) ? utms : []
}

module.exports = {
    getAll: getAll,
    getMonthly: getMonthly,
    getByDateRange: getByDateRange
}