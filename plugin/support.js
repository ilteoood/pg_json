'use strict'

const fp = require('fastify-plugin')
const knex = require('knex')

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('knex', () => knex({
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: 3306,
      user: 'your_database_user',
      password: 'your_database_password',
      database: 'myapp_test',
    },
  }))
})
