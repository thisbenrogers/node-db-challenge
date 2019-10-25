
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'taskDescValue1', notes: "taskNoteValue1", completed: false, pro_id: 1},
        {id: 2, task_description: 'taskDescValue2', notes: "taskNoteValue2", completed: false, pro_id: 1},
        {id: 3, task_description: 'taskDescValue3', notes: "taskNoteValue3", completed: false, pro_id: 2},
        {id: 4, task_description: 'taskDescValue4', notes: "taskNoteValue4", completed: false, pro_id: 2},
        {id: 5, task_description: 'taskDescValue5', notes: "taskNoteValue5", completed: false, pro_id: 2},
        {id: 6, task_description: 'taskDescValue6', notes: "taskNoteValue6", completed: false, pro_id: 3},
        {id: 7, task_description: 'taskDescValue7', notes: "taskNoteValue7", completed: false, pro_id: 3},
        {id: 8, task_description: 'taskDescValue8', notes: "taskNoteValue8", completed: false, pro_id: 3},
      ]);
    });
};
