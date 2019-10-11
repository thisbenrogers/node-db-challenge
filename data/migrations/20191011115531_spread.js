
exports.up = function(knex) {
  return knex.schema.createTable('spread', spread => {
    
    spread
      .increments();

    spread
      .integer('res_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resources')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    spread
      .integer('pro_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('projects')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    spread
      .text('notes', 1024);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('spread');
};
