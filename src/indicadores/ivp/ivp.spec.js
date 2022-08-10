const request = require('supertest')
const indicador = require('.')

describe('IVP Indicadores', () => {
  test('should get all IVP data', async () => {
    const data = await indicador.getAll()
    expect(data).not.toHaveLength(0)
  })
  
  test('should get data from todays IVP', async () => {
    const today = new Date().toISOString().slice(0, 10)
    const data = await indicador.getByDate(today)
    expect(data).not.toHaveLength(0)
  })

  test('should get IVP for 2022-01-01 and has to be equal 31760.40', async () => {
    const data = await indicador.getByDate('2022-01-01')
    expect(data[0].valor).toBe('31760.40')
  })
  
  test('should get empty data from inexistent date', async () => {
    const data = await indicador.getByDate('2099-01-01')
    expect(data).toHaveLength(0)
  })
  
  test('should get IVP from January 2022', async () => {
    const data = await indicador.getByDateRange('2022-01-01', '2022-01-31')
    expect(data).toHaveLength(31)
    expect(data[0].fecha).toBe('2022-01-01')
    expect(data[30].fecha).toBe('2022-01-31')
  })
  
  test('should get one IVP from date range', async () => {
    const data = await indicador.getByDateRange('2022-01-01', '2022-01-01')
    expect(data).toHaveLength(1)
    expect(data[0].fecha).toBe('2022-01-01')
    expect(data[0].valor).toBe('31760.40')
  })

  test('should get empty data from inexistent date range', async () => {
    const data = await indicador.getByDateRange('2022-01-31', '2022-01-01')
    expect(data).toHaveLength(0)
  })

});