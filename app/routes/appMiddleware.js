const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');

const apiRoutes = express.Router();

class Middleware {
  constructor() {
    return apiRoutes.use((request, response, next) => {
      const token = request.body.token || request.query.token || request.headers['x-access-token'];
      if (token) {
        jwt.verify(token, config.jwtSecret, (error, decoded) => {
          if (error) {
            return response.json({ success: false, message: 'Failed to authenticate token.' });
          }
          request.decoded = decoded;
          return next();
        });
      } else {
        return response.status(403).send({
          success: false,
          message: 'No token provided.',
        });
      }
      return false;
    });
  }
}

module.exports = Middleware;
