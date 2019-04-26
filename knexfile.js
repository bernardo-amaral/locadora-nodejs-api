// Update with your config settings.
const config = require('./app/database');

module.exports = {

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
  },

  development: {
    client: 'postgresql',
    connection: {
      host: config.dev.host,
      port: config.dev.port,
      database: config.dev.database,
      user: config.dev.user,
      password: config.dev.password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

};
