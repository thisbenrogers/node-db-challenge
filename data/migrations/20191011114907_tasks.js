
exports.up = function(knex) {
  return knex.schema.createTable('tasks', tasks => {

    tasks
      .increments();

    tasks
      .string('task_description', 1024)
      .notNullable();

    tasks
      .string('notes', 1024);

    tasks
      .boolean('completed')
      .notNullable()
      .defaultTo(false);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
