exports.up = async knex => knex.schema.createTable('item_urls', (t) => {
  t.increments();
  t.uuid('item_id').references('id').inTable('items');
  t.string('source_type').notNullable();
  t.text('url').notNullable();
  t.text('description');
  t.integer('monitor_frequency').notNullable().defaultTo(1);
  t.datetime('last_run').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  t.boolean('is_active').notNullable().defaultTo(true);
  t.timestamps(false, true);
});

exports.down = async knex => knex.schema.dropTableIfExists('item_urls');
