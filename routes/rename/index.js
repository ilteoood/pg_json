'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/orm', async function () {
    const users = await fastify.prisma.users.findMany()

    return users.map(user => ({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      birthDate: user.birth_date
    }))
  })

  fastify.get('/query', function () {
    return fastify.knex('users').select('id', {
      firstName: 'first_name',
      lastName: 'last_name',
      birthDate: 'birth_date'
    })
  })
}
