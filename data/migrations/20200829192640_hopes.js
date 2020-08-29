
exports.up = function (knex) {
  return knex.schema.createTable('hopes', table => {
    table.increments();
    table.string('title', 120).notNullable();
    table.string('description').notNullable();
    table.boolean('hopesAchieved').notNullable();
  })

};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('hopes')
};
