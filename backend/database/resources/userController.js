// import schemas
const User = require('./user.js');

exports.create = function(req, res) {
  User.create(req, res);
};

exports.find = function (req, res) {
  User.find(req, res);
};

exports.deleate = function(req, res) {
  User.remove(req, res);
};