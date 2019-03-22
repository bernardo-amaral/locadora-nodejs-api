/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../server');

let accessToken = '';

describe('Check the Auth routes', () => {
  it('POST /api/login', (done) => {
    request(app)
      .post('/api/login')
      .send({ email: 'bernardo.amaral85@gmail.com', password: 'senha123' })
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, response) => {
        accessToken = response.body.token;
        done();
      });
  });

  it('POST /api/v1/logout', (done) => {
    request(app)
      .post('/api/v1/logout')
      .send({ userId: 1, token: accessToken })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
