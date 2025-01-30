'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/node', async function () {
    const users = await fastify.knex('users').select()

    return users.map(user => ({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      birthDate: user.birth_date
    }))
  })

  fastify.get('/db', function () {
    return fastify.knex('users').select({
      id: 'id',
      firstName: 'first_name',
      lastName: 'last_name',
      birthDate: 'birth_date'
    })
  })
}
