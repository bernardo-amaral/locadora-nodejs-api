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

exports.up = function (db, callback) {
  db.createTable('tokens', {
    token: {
      type: 'string',
      primaryKey: true,
    },
    user_id: {
      type: 'int',
      notNull: true,
      foreignKey: {
        name: 'token_user_id_fk',
        table: 'users',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: {
          user_id: 'user_id'
        }
      },
    },
    active: {
      type: 'string',
      length: 1,
      defaultValue: 'S',
      notNull: true
    },
  }, (err) => {
    if (err) return callback(err);
    return callback();
  });
};

exports.down = function (db, callback) {
  db.dropTable('tokens', callback);
};

exports._meta = {
  "version": 1
};
