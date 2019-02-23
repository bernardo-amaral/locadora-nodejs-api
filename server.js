const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;


app.listen(port);
// eslint-disable-next-line no-console
console.log(`Locadora API server started on: ${port}`);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Routes = require('./app/routes/appV1Routes');

app.use('/api', new Routes());
