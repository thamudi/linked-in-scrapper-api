const server = require('../src/app.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('Jobs', () => {
  /**
   *   param: 'options.filters.type',
   *   reason: 'Must be one of F, P, T, C, I, V, O'
   */
  const query = {
    "query": "Software Developer",
    "type": "F",
    "locations": "amman,jordan",
    "limit": "20"
  }

  it('Should Search for Jobs', async () => {
    await mockRequest.get('/jobs/search').query(query).then(response => {
      expect(response.status).toBe(200);
    }).catch(error => console.log(error));
    // const mockResponse = await mockRequest.get('/jobs/search').query(query);
    // expect(mockResponse.status).toBe(200);
  });
});
