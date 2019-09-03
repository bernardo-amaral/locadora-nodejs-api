/* eslint-disable */

exports.seed = function (knex) {
  return knex('user_spiders_terms').del()
    .then(() => knex('user_spiders_terms').insert([
      { user_id: 1, value: 'Bloodstained-midia-fisica-nintendo-switch' },
      { user_id: 1, value: 'crash-team-racing-midia-fisica-nintendo-switch' },
      { user_id: 1, value: 'shantae-midia-fisica-nintendo-switch' },
      { user_id: 1, value: 'wonder-boy-midia-fisica-nintendo-switch' },
    ]));
};
