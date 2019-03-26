/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../server');

describe('Check the Users routes', () => {
  it('GET /api/v1/users', (done) => {
    request(app)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /users/:userId', (done) => {
    request(app)
      .get('/api/v1/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('POST /api/v1/users', (done) => {
    const randomUserAge = Math.floor(Math.random() * (100 - 14)) + 14;
    request(app)
      .post('/api/v1/users')
      .send({ name: 'john doe', email: `john${randomUserAge}@doe.com`, password: 'pass123' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  // it('DELETE /users/:userId', (done) => {
  //   request(app)
  //     .delete('/api/v1/users/666')
  //     .set('Accept', 'application/json')
  //     .expect('Content-Type', /json/)
  //     .expect(200, done);
  // });
});
