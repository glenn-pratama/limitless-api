const express = require('express');
const config = require('config');

const router = require('./router');

const app = express();
const port = config.get('General.port');

app.use('/', router);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Limitless API listening on port ${port}`);
  // eslint-disable-next-line no-console
  console.log(`Environment used is ${process.env.NODE_ENV}`);
});
