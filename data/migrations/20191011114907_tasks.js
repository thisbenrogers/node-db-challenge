
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

    tasks
      .integer('pro_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('tasks');
};
