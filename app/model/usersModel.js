var sql = require('./db.js');

var User = function (user) {
    this.user = user.user;
    this.status = user.status;
    this.created_at = new Date();
};
User.createUser = function createUser(newUser, result) {
    sql.query("INSERT INTO users set ?", newUser, function (err, res) {
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
    sql.query("select user from users where id = ? ", userId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);

        }
    });
};
User.getAll = function getAll(result) {
    sql.query("select * from users", function (err, res) {
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
    sql.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};

module.exports = User;