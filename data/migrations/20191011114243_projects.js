
exports.up = function(knex) {
  return knex.schema.createTable('projects', projects => {

    projects 
      .increments();

    projects 
      .string('pro_name', 255)
      .notNullable();

    projects
      .string('pro_description', 1024);

    projects
      .boolean('completed')
      .notNullable()
      .defaultTo(false);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('projects');
};
