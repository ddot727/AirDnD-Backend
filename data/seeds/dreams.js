
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('dreams').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('dreams').insert([
        { id: 1, title: 'stuff', description: 'wooo!', dreamsAchieved: true },
        { id: 2, title: 'things', description: 'yeah!', dreamsAchieved: true },
        { id: 3, title: 'items', description: 'yay!', dreamsAchieved: false },

      ]);
    });
};
