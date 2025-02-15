'use strict'

const fp = require('fastify-plugin')
const { PrismaClient } = require('@prisma/client')

module.exports = fp(async function (fastify, opts) {
  fastify.decorate('prisma', new PrismaClient())
})
