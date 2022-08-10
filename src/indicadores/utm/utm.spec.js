const request = require('supertest')
const indicador = require('.')

describe('UTM Indicadores', () => {
  test('should get all UTM data', async () => {
    const data = await indicador.getAll()
    expect(data).not.toHaveLength(0)
  })

  test('should get data from this month UTM', async () => {
    const today = new Date().toISOString().slice(0, 10)
    const year = parseInt(today.split('-')[0], 10)
    const month = parseInt(today.split('-')[1], 10)

    const data = await indicador.getMonthly(year, month)
    expect(data).toHaveLength(1)
  })
  
  test('should get UTM for January 2022 has to be equal 54442.00', async () => {
    const year = 2022
    const month = 1

    const data = await indicador.getMonthly(year, month)
    expect(data).toHaveLength(1)
    expect(data[0].valor).toBe('54442.00')
  })
    
  test('should get empty data from inexistent date', async () => {
    const data = await indicador.getMonthly(2099, 1)
    expect(data).toHaveLength(0)
  })
  
  test('should get one UF from date range', async () => {
    const data = await indicador.getByDateRange('2022-01-01', '2022-01-01')
    expect(data).toHaveLength(1)
    expect(data[0].fecha).toBe('2022-01-01')
    expect(data[0].valor).toBe('54442.00')
  })
  

  test('should get empty data from inexistent date range', async () => {
    const data = await indicador.getByDateRange('2022-01-31', '2022-01-01')
    expect(data).toHaveLength(0)
  })

});