exports.up = async knex => knex
  .schema.createTable('item_images', (t) => {
    t.increments();
    t.integer('item_url_id').references('id').inTable('item_urls');
    t.text('url').notNullable();
    t.boolean('is_active').notNullable().defaultTo(true);
    t.timestamps(false, true);
  });

exports.down = async knex => knex.schema.dropTableIfExists('item_images');
