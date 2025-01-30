// Update with your config settings.

const dbConfig = {
  client: 'postgresql',
  connection: {
    database: 'mydb',
    user: 'myuser',
    password: 'mypassword'
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
  production: dbConfig
};
