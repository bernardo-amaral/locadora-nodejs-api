/* eslint-disable no-undef */
const { assert } = require('chai');
const request = require('supertest');
const app = require('../server');

let lastInsertedUserId = '';

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
      .send({ name: 'john doe', email: `john${randomUserAge}@doe.com`, password: 'pass123' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, response) => {
        lastInsertedUserId = response.body.userId;
        done();
      });
  });

  it('Delete the last user created', (done) => {
    request(app)
      .delete(`/api/v1/users/${lastInsertedUserId}`)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((error, response) => {
        assert.equal(response.body.success, true);
        done();
      });
  });
});
