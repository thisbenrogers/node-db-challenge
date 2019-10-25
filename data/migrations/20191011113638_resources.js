
exports.up = function(knex) {
  return knex.schema.createTable('resources', resources => {
    
    resources
      .increments();

    resources
      .string('res_name', 255)
      .notNullable()
      .unique();

    resources
      .string('res_description', 1024);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('resources');
};
