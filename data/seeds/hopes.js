
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('hopes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('hopes').insert([
        { id: 1, title: 'cats', description: 'meow!', hopesAchieved: true },
        { id: 2, title: 'dogs', description: 'bark!', hopesAchieved: true },
        { id: 3, title: 'iguana', description: '*siren sound*', hopesAchieved: false },

      ]);
    });
};
