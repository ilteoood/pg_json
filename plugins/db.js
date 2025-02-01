'use strict'

const fp = require('fastify-plugin')
const knex = require('knex')
const { PrismaClient } = require('@prisma/client')
const { dbConfig } = require('../knexfile')

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('prisma', new PrismaClient())
  fastify.decorate('knex', knex(dbConfig))
})
