const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const config = require('config');
const cors = require('cors');

const { Model } = require('objection');
const db = require('./libraries/db');

Model.knex(db);

const router = require('./router');

const app = express();
const port = config.get('General.port');

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use('/', router);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Limitless API listening on port ${port}`);
  // eslint-disable-next-line no-console
  console.log(`Environment used is ${process.env.NODE_ENV}`);
});
