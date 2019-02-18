var sql = require('./db.js');

var User = function (user) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
};
User.createUser = function createUser(newUser, result) {
    sql.query("INSERT INTO users set ?", newUser, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
User.getById = function getById(userId, result) {
    sql.query("SELECT * FROM users WHERE user_id = ? ", userId, function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);

        }
    });
};
User.getAll = function getAll(result) {
    sql.query("SELECT * FROM users ORDER BY user_id ASC", function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('users : ', res);
            result(null, res);
        }
    });
};

User.remove = function (id, result) {
    sql.query("DELETE FROM users WHERE user_id = ?", [id], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = User;