
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, res_name: 'resValue1', res_description: "resDescriptionValue1"},
        {id: 2, res_name: 'resValue2', res_description: "resDescriptionValue2"},
        {id: 3, res_name: 'resValue3', res_description: "resDescriptionValue3"}
      ]);
    });
};
