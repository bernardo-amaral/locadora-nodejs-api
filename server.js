const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;


app.listen(port);
// eslint-disable-next-line no-console
console.log(`API server started on: ${port}`);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Routes = require('./app/routes/appRoutes');

// eslint-disable-next-line no-unused-vars
const routes = new Routes(app);
