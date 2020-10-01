const express = require('express');
const bodyParser = require('body-parser');
const { scopePerRequest } = require('awilix-express');

const UserRoutes = require('./routes/userRoutes');
const AppRoutes = require('./routes/appRoutes');
const container = require('./container');


const port = process.env.PORT || 3000;
const app = express();
app.use(scopePerRequest(container));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`API server started on: ${port}`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', new UserRoutes());
app.use('/api', new AppRoutes());
module.exports = app;
