/* eslint-disable */

let dbm;
let type;
let seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {
  db.createTable('users', {
    user_id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      notNull: true,
    },
    name: {
      type: 'string',
      length: 255,
      notNull: true,
    },
    email: {
      type: 'string',
      length: 255,
      notNull: true,
    },
    password: {
      type: 'string',
      length: 255,
      notNull: true,
    },
  }, (err) => {
    if (err) return callback(err);
    return callback();
  });

  // db.addIndex('users', 'users_email_key', 'email', ['unique'], callback);

  // let columnNameArray = ['user_id', 'name', 'email', 'password'];

  // let valueArray = [
  //   [1, 'Bernardo',	'bernardo.amaral85@gmail.com', 'e7d80ffeefa212b7c5c55700e4f7193e'],
  //   [2, 'Kira',	'kira@mailteste.com',	'e7d80ffeefa212b7c5c55700e4f7193e'],
  //   [3, 'Lola',	'lola@mailteste.com',	'e7d80ffeefa212b7c5c55700e4f7193e']
  // ];

  // db.insert('users', columnNameArray, valueArray, callback);
};

exports.down = function (db, callback) {
  db.dropTable('users', callback);
};

exports._meta = {
  version: 1,
};
