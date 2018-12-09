const config = require('config');

const dbConfig = config.get('General.dbConfig');

module.exports = {
  client: dbConfig.client,
  connection: dbConfig.connection,
  pool: dbConfig.pool,
};
