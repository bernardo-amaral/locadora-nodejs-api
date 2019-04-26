const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;


// eslint-disable-next-line no-console
app.listen(port, () => console.log(`API server started on: ${port}`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const Routes = require('./routes/appV1Routes');

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.use('/api', new Routes());
module.exports = app;
