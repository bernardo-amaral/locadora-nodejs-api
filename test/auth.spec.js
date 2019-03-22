/* eslint-disable no-undef */
const request = require('supertest');
const express = require('express');

const app = express();

describe('Check the Auth routes', () => {
  it('GET /login', (done) => {
    request(app)
      .get('/login')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });

  it('GET /logout', (done) => {
    request(app)
      .get('/logout')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
