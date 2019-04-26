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
  let columnNameArray = ['user_id', 'name', 'email', 'password'];

  let valueArray =
    [1, 'Bernardo',	'bernardo.amaral85@gmail.com', 'e7d80ffeefa212b7c5c55700e4f7193e'];

  db.insert('users', columnNameArray, valueArray, callback);
};

exports.down = function(db) {
  return null;
};

exports._meta = {
  "version": 1
};
