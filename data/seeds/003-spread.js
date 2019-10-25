
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('spread').del()
    .then(function () {
      // Inserts seed entries
      return knex('spread').insert([
        {id: 1, res_id: 1, pro_id: 1, notes: 'rowValue1'},
        {id: 2, res_id: 1, pro_id: 2, notes: 'rowValue2'},
        {id: 3, res_id: 2, pro_id: 3, notes: 'rowValue3'}
      ]);
    });
};
