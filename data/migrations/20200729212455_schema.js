
exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
        tbl.increments();
        tbl.string('name', 128)
    })
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 128)
        .unique();
      tbl.string('type', 128)
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};
