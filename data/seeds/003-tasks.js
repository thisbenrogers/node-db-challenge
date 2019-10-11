
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, task_description: 'taskDescValue1', task_notes: "taskNoteValue1", completed: false, pro_id: 1},
        {id: 2, task_description: 'taskDescValue2', task_notes: "taskNoteValue2", completed: false, pro_id: 1},
        {id: 3, task_description: 'taskDescValue3', task_notes: "taskNoteValue3", completed: false, pro_id: 2},
        {id: 4, task_description: 'taskDescValue4', task_notes: "taskNoteValue4", completed: false, pro_id: 2},
        {id: 5, task_description: 'taskDescValue5', task_notes: "taskNoteValue5", completed: false, pro_id: 2},
        {id: 6, task_description: 'taskDescValue6', task_notes: "taskNoteValue6", completed: false, pro_id: 3},
        {id: 7, task_description: 'taskDescValue7', task_notes: "taskNoteValue7", completed: false, pro_id: 3},
        {id: 8, task_description: 'taskDescValue8', task_notes: "taskNoteValue8", completed: false, pro_id: 3},
      ]);
    });
};
