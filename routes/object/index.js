'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/orm', async function () {
    const users = await fastify.knex('users').select()

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

  fastify.get('/query', function () {
    return fastify.knex('users').select('id', {
      name: fastify.knex.raw("json_build_object('first', first_name, 'last', last_name)"),
      birth: fastify.knex.raw("json_build_object('date', birth_date, 'age', date_part('year', CURRENT_DATE) - date_part('year', birth_date))")
    })
  })
}
