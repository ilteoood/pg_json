'use strict'

const schema = {
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'integer' },
          name: {
            type: 'object',
            properties: {
              first: { type: 'string' },
              last: { type: 'string' }
            },
            required: ['first', 'last']
          },
          birth: {
            type: 'object',
            properties: {
              date: { type: 'string', format: 'date' },
              age: { type: 'integer' }
            },
            required: ['date', 'age']
          }
        },
        required: ['id', 'name', 'birth']
      }
    }
  }
}

module.exports = async function (fastify, opts) {
  fastify.get('/orm', { schema }, async () => {
    const users = await fastify.prisma.users.findMany()

    const currentYear = new Date().getFullYear()

    return users.map(user => ({
      id: user.id,
      name: {
        first: user.first_name,
        last: user.last_name
      },
      birth: {
        date: user.birth_date,
        age: currentYear - user.birth_date.getFullYear()
      }
    }))
  })

  fastify.get('/query', { schema }, () => fastify.prisma.$queryRaw`
    SELECT id,
           json_build_object('first', first_name, 'last', last_name) as "name",
           json_build_object('date', birth_date, 'age', date_part('year', age(birth_date))) as "birth"
    FROM users
  `)
}
