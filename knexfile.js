const dotenv = require('dotenv');
dotenv.config();

const dbConfig = {
  client: 'postgresql',
  connection: {
    connectionString: process.env.DATABASE_URL,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: dbConfig,
  staging: dbConfig,
  production: dbConfig,
  dbConfig
};
