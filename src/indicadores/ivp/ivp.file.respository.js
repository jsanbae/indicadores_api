const fs = require('fs')
const webscraper = require('../../web-scraper/bancocentral.ws')

const repositoryFile = `${__dirname}/../../data/ivp.json`
let dataFromFile = []

const getDataFromFile = async () => {
    await createDataFile()

    if (!dataFromFile.length) dataFromFile = JSON.parse(fs.readFileSync(repositoryFile))

    return dataFromFile
}

const createDataFile = async (forceRebuild=false) => {

    if (!forceRebuild && fs.existsSync(repositoryFile)) return
    
    if (fs.existsSync(repositoryFile)) fs.unlinkSync(repositoryFile)
    
    try {
        console.log('Creating Repository File...')
        
        const dataFromWebscraper = await webscraper.getIVPData()
        const jsonString = JSON.stringify(dataFromWebscraper)

        fs.writeFileSync(repositoryFile, jsonString, 'utf8')
        
        console.log('Repository File created')

    } catch (err) {
        console.error('Cannot create IVP Repository File ' . err)
    }
}

const getAll = () => {
    return getDataFromFile()
}

const getByDate = async (date) => {
    const ivpsData = await getDataFromFile()
    const ivp = ivpsData.filter(ivpData => ivpData.fecha === date)

    return (ivp) ? ivp : {}
} 

const getByDateRange = async (dateFrom, dateTo) => {
    const ivpsData = await getDataFromFile()

    const ivps = ivpsData.filter(ivpData => ivpData.fecha >= dateFrom && ivpData.fecha <= dateTo)

    return (ivps) ? ivps : []
}


const refresh = async () => {
    await createDataFile(true)
    return getDataFromFile()
}

module.exports = {
    getAll: getAll,
    getByDate: getByDate,
    getByDateRange: getByDateRange,
    refresh: refresh
}