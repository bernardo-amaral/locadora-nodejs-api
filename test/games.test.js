/* eslint-disable */
process.env.PORT = '5000';

const { assert } = require('chai');
const request = require('supertest');
const app = require('../app/server');

describe('Check the Games', () => {
  it('List all games', (done) => {
    request(app)
      .get('/api/v1/games')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('List all games from userId "1"', (done) => {
    request(app)
      .get('/api/v1/user/games/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });


  it('List all games from userId "1" from platform "Super Nintendo"', (done) => {
    request(app)
      .get('/api/v1/user/games/1/Super%20Nintendo')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
