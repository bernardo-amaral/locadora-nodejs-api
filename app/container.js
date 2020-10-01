// const config = require('../config');

const {
  Lifetime,
  asClass,
  asValue,
  createContainer,
} = require('awilix');

const config = require('../config');
const database = require('./model/database');

const container = createContainer();

container
  .register({
    database: asValue(database),
    config: asValue(config),
  })
  .loadModules([
    'app/controller/*.js',
    'app/operation/**/*.js',
    'app/model/*.js',
  ], {
    formatName: 'camelCase',
    resolverOptions: {
      lifetime: Lifetime.SINGLETON,
      register: asClass,
    },
  });

module.exports = container;
