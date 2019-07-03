/* eslint-disable */

exports.seed = function (knex) {
  return knex('user_spiders_terms').del()
    .then(() => knex('user_spiders_terms').insert([
      { user_id: 1, value: 'Booldstained-Nintendo-Switch' },
    ]));
};
