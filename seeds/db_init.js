/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  await knex('users').del()

  const users = [];
  for(let i = 0; i < 100; i++) {
    users.push({
      id: i,
      first_name: `Matteo Pietro ${i}`,
      last_name: `Dazzi ${i}`,
      birth_date: new Date(`${1924 + i}-01-01`)
    })
  }

  await knex('users').insert(users);
};
