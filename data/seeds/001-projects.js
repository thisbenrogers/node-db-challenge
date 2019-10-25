
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, pro_name: 'ProValue1', pro_description: "ProDescValue1", completed: false},
        {id: 2, pro_name: 'ProValue2', pro_description: "ProDescValue2", completed: false},
        {id: 3, pro_name: 'ProValue3', pro_description: "ProDescValue3", completed: false}
      ]);
    });
};
