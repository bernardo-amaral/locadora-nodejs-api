const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const TokensModel = require('../model/TokensModel');

const apiRoutes = express.Router();

class Middleware {
  constructor() {
    return apiRoutes.use((request, response, next) => {
      const token = request.body.token || request.query.token || request.headers['x-access-token'];
      if (token) {
        jwt.verify(token, config.jwtSecret, (error, decoded) => {
          TokensModel.checkTokenStatus(token, (_error, tokenActive) => {
            if (error || !tokenActive) {
              return response.json({ success: false, message: 'Failed to authenticate token.' });
            }
            request.decoded = decoded;
            return next();
          });
        });
      }
      return next();
      // return response.status(403).send({
      //   success: false,
      //   message: 'No token provided.',
      // });
    });
  }
}

module.exports = Middleware;
