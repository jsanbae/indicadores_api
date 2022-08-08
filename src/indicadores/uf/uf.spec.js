const request = require('supertest')
const indicador = require('.')

describe('UF Indicadores', () => {
  test('should get all UF data', async () => {
    const data = await indicador.getAll()
    expect(data).not.toHaveLength(0)
  })
  
  test('should get UF for 2022-01-01 and has to be equal 30996.73', async () => {
    const data = await indicador.getByDate('2022-01-01')
    expect(data[0].valor).toBe('30996.73')
  })

  test('should get empty data from inexistent date', async () => {
    const data = await indicador.getByDate('2099-01-01')
    expect(data).toHaveLength(0)
  })

  
  test('should get UF from January 2022', async () => {
    const data = await indicador.getByDateRange('2022-01-01', '2022-01-31')
    expect(data).toHaveLength(31)
    expect(data[0].fecha).toBe('2022-01-01')
    expect(data[30].fecha).toBe('2022-01-31')
  })

  test('should get one UF from date range', async () => {
    const data = await indicador.getByDateRange('2022-01-01', '2022-01-01')
    expect(data).toHaveLength(1)
    expect(data[0].fecha).toBe('2022-01-01')
    expect(data[0].valor).toBe('30996.73')
  })

  test('should get empty data from inexistent date range', async () => {
    const data = await indicador.getByDateRange('2022-01-31', '2022-01-01')
    expect(data).toHaveLength(0)
  })

});