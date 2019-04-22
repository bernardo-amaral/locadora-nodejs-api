/* eslint-disable */

let dbm;
let type;
let seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {

  db.createTable('games', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: 'string',
      length: 80,
      notNull: true,
    },
    plataform: {
      type: 'string',
      length: 80
    },
    developer: {
      type: 'string',
      length: 80
    },
    genre: {
      type: 'string',
      length: 80
    },
    mode: {
      type: 'string',
      length: 80,
      defaultValue: 'single-player'
    },
    release_date: {
      type: 'date'
    },
    cover_image: {
      type: 'string',
      length: 255
    },
  }, function(err) {
    if (err) return callback(err);
    return callback();
  });

};

exports.down = function(db, callback) {
  db.dropTable('games', callback);
};

exports._meta = {
  "version": 1
};
