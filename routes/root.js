'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/simple', async function () {
    return { root: true }
  })

  fastify.get('/pg_json', async function () {
    return { root: true }
  })
}
