const { fetchCache } = require('./../utils/fetchData')
const webscraper = require('./bancocentral.ws')

describe('Banco Central Web Scrapper', () => {

  test('verify UF and IVP endpoint is ready', async () => {
    const response = await fetchCache(webscraper.UFIVPEndpoint)
    expect(response.status).toBe(200)
  })
  
  test('verify UTM endpoint is ready', async () => {
    const response = await fetchCache(webscraper.UTMEndpoint)
    expect(response.status).toBe(200)
  })

  test('should get UF data', async () => {
    const data = await webscraper.getUFData()
    expect(data).not.toHaveLength(0)
  })

  test('should get IVP data', async () => {
    const data = await webscraper.getUFData()
    expect(data).not.toHaveLength(0)
  })

  test('should get UTM data', async () => {
    const data = await webscraper.getUTMData()
    expect(data).not.toHaveLength(0)
  })

})