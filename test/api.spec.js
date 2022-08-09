const request = require('supertest')
const app = require('../web/app')

describe('GET /api/v1/indicadores/uf', () => {
  test('should  respond with a 200 status code', async () => {
    const response = await request(app).get('/api/v1/indicadores/uf').send()
    expect(response.status).toBe(200);
  })
  
});
