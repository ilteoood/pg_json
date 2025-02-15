'use strict'

const schema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          firstName: { type: 'string' },
          lastName: { type: 'string' },
          birthDate: { type: 'string', format: 'date' }
        },
        required: ['id', 'firstName', 'lastName', 'birthDate']
      }
    }
  }
}

module.exports = async function (fastify, opts) {
  fastify.get('/orm', { schema }, async () => {
    const users = await fastify.prisma.users.findMany()

    return users.map(user => ({
      id: user.id,
      firstName: user.first_name,
      lastName: user.last_name,
      birthDate: user.birth_date
    }))
  })

  fastify.get('/query', { schema }, () => fastify.prisma.$queryRaw`
    SELECT id, first_name as "firstName", last_name as "lastName", birth_date as "birthDate"
    FROM users
  `)
}
