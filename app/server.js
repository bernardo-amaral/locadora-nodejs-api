const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`API server started on: ${port}`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const UserRoutes = require('./routes/userRoutes');
const AppRoutes = require('./routes/appRoutes');

app.get('/', (request, response) => {
  response.json({ success: true, message: 'Welcome!' });
});

app.use('/api', new UserRoutes());
app.use('/api', new AppRoutes());
module.exports = app;
