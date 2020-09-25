/* eslint-disable */
process.env.PORT = '5000';

const { assert } = require('chai');
const request = require('supertest');
const app = require('../app/server');

describe('Check the Consoles', () => {
  it('List all consoles', (done) => {
    request(app)
      .get('/api/v1/consoles')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
