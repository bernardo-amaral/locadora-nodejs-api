/* eslint-disable */

exports.seed = function (knex) {
  return knex('users').del()
    .then(() => knex('users').insert([
      { user_id: 1, name: 'Bernardo', email: 'bernardo.amaral85@gmail.com', password: 'e7d80ffeefa212b7c5c55700e4f7193e' },
      { user_id: 2, name: 'Kira', email: 'kira@mailteste.com', password: 'e7d80ffeefa212b7c5c55700e4f7193e' },
      { user_id: 3, name: 'Lola', email: 'lola@mailteste.com', password: 'e7d80ffeefa212b7c5c55700e4f7193e' }
    ]));
};
