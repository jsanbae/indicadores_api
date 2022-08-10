const request = require('supertest')
const app = require('../web/app')

describe('GET /api/v1/uf', () => {
  test('get all data should respond with a 200 status code', async () => {
    const response = await request(app).get('/v1/uf').send()
    expect(response.status).toBe(200);
  })

  test('get one data should respond with a 200 status code', async () => {
    const response = await request(app).get('/v1/uf/2022-01-01').send()
    expect(response.status).toBe(200);
  })

  test('get few data should respond with a 200 status code', async () => {
    const response = await request(app).get('/v1/uf/range/2022-01-01/2022-01-31').send()
    expect(response.status).toBe(200);
  })

});

describe('GET /api/v1/ivp', () => {
  test('get all data should respond with a 200 status code', async () => {
    const response = await request(app).get('/v1/ivp').send()
    expect(response.status).toBe(200);
  })

  test('get one data should respond with a 200 status code', async () => {
    const response = await request(app).get('/v1/ivp/2022-01-01').send()
    expect(response.status).toBe(200);
  })

  test('get few data should respond with a 200 status code', async () => {
    const response = await request(app).get('/v1/ivp/range/2022-01-01/2022-01-31').send()
    expect(response.status).toBe(200);
  })

});

describe('GET /api/v1/utm', () => {
  test('get all data should respond with a 200 status code', async () => {
    const response = await request(app).get('/v1/utm').send()
    expect(response.status).toBe(200);
  })

  test('get one data should respond with a 200 status code', async () => {
    const response = await request(app).get('/v1/utm/2022/01').send()
    expect(response.status).toBe(200);
  })
  
  test('get few data should respond with a 200 status code', async () => {
    const response = await request(app).get('/v1/utm/range/2022-01-01/2022-04-01').send()
    expect(response.status).toBe(200);
  })

});