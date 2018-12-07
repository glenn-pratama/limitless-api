const express = require('express');

const router = require('./router');
const app = express();
const port = 4000;

app.use('/', router);
app.listen(port, () => {
  console.log(`Limitless API listening on port ${port}`);
  console.log(`Environment used is ${process.env.NODE_ENV}`);
});
