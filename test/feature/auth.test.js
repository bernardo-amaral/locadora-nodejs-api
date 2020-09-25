/* eslint-disable */
process.env.PORT = '5000';

const request = require('supertest');
const app = require('../app/server');

let accessToken = '';

describe('Check the authentication', () => {
  it('Login into system', (done) => {
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

  it('Logout from system', (done) => {
    request(app)
      .post('/api/v1/logout')
      .send({ userId: 1, token: accessToken })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
