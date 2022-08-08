const fs = require('fs')
const webscraper = require('./../../web-scraper/bancocentral.ws')

const repositoryFile = `${__dirname}/../../data/uf.json`
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
    
    const dataFromWebscraper = await webscraper.getUFData()
    const jsonString = JSON.stringify(dataFromWebscraper)

    fs.writeFileSync(repositoryFile, jsonString, 'utf8')

    console.log('Repository File created')
}

const getAll = () => {
    return getDataFromFile()
}

const getByDate = async (date) => {
    const ufsData = await getDataFromFile()
    const uf = ufsData.filter(ufData => ufData.fecha === date)

    return (uf) ? uf : {}
} 

const getByDateRange = async (dateFrom, dateTo) => {
    const ufsData = await getDataFromFile()
    const ufs = ufsData.filter(ufData => ufData.fecha >= dateFrom && ufData.fecha <= dateTo)

    return (ufs) ? ufs : []
}

module.exports = {
    getAll: getAll,
    getByDate: getByDate,
    getByDateRange: getByDateRange
}