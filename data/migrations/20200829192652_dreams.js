
exports.up = function (knex) {
  return knex.schema.createTable('dreams', table => {
    table.increments();
    table.string('title', 120).notNullable();
    table.string('description').notNullable();
    table.boolean('dreamsAchieved').notNullable();
  })

};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('dreams')
};
