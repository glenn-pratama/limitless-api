exports.up = async knex => knex.schema
  .createTable('item_prices', (t) => {
    t.increments();
    t.integer('item_url_id').references('id').inTable('item_urls');
    t.string('currency').notNullable();
    t.bigInteger('normal_price').notNullable();
    t.bigInteger('discounted_price').notNullable();
    t.string('status').notNullable();
    t.timestamps(false, true);
  });

exports.down = async knex => knex.schema.dropTableIfExists('item_prices');
