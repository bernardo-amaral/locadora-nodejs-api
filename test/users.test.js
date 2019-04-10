/* eslint-disable no-undef */
process.env.PORT = '5000';

const { assert } = require('chai');
const request = require('supertest');
const app = require('../server');

describe('Check the Users', () => {
  it('List all users', (done) => {
    request(app)
      .get('/api/v1/users')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Retrieve one user from system', (done) => {
    request(app)
      .get('/api/v1/users/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Create an new user', (done) => {
    const randomUserAge = Math.floor(Math.random() * (100 - 14)) + 14;
    request(app)
      .post('/api/v1/users')
      .send({
        userId: 99,
        name: 'john doe',
        email: `john${randomUserAge}@doe.com`,
        password: 'pass123',
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('Delete the last user created', (done) => {
    request(app)
      .delete('/api/v1/users/99')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, response) => {
        assert.equal(response.body.success, true);
        done();
      });
  });
});
