const { Model } = require('objection');
const db = require('./libraries/db');

Model.knex(db);

const adapter = require('./item-prices/adapter');

adapter.collectPrice().then(() => process.exit());
