'use strict'

const fp = require('fastify-plugin')
const knex = require('knex')
const { dbConfig } = require('../knexfile')

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('knex', knex(dbConfig))
})
