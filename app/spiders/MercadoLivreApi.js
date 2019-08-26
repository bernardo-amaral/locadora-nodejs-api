const meli = require('mercadolibre');

const clientId = 'AA';
const clientSecret = 'AA';
const accessToken = 'AA-AA-AA-AA-AA';

const meliObject = new meli.Meli(clientId, clientSecret, [accessToken]);

meliObject.get(`sites/MLB/search?q=zelda`, (err, res) => {
  // eslint-disable-next-line no-console
  console.log(res);
});
