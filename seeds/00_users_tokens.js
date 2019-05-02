/* eslint-disable */

exports.seed = function (knex) {
  return knex('tokens').del();
};
