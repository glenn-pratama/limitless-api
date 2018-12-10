exports.up = async (knex) => {
  await knex.raw('create extension if not exists "uuid-ossp"');

  return knex.schema.createTable('items', (t) => {
    t.uuid('id').notNullable().defaultTo(knex.raw('uuid_generate_v4()')).primary();
    t.string('name').notNullable();
    t.text('description');
    t.boolean('is_active').notNullable().defaultTo(true);
    t.timestamps(false, true);
    t.unique('name');
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists('items');
  return knex.raw('drop extension if exists "uuid-ossp"');
};
