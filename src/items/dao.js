const { transaction } = require('objection');

const ItemModel = require('./model')();
const ItemUrlModel = require('../item-urls/model')();

const createItemDao = () => {
  class ItemDao {
    insertItem = async (item) => {
      const knex = ItemModel.knex();

      let trx;
      try {
        trx = await transaction.start(knex);

        const itemInserted = await ItemModel.query(trx).insert({
          name: item.name,
          description: item.description,
        });

        await ItemUrlModel.query(trx).insert({
          item_id: itemInserted.id,
          source_type: item.sourceType,
          url: item.url,
          monitor_frequency: item.monitorFrequency,
        });

        await trx.commit();

        return itemInserted.id;
      } catch (err) {
        await trx.rollBack();

        return Promise.reject(err);
      }
    }
  }

  return new ItemDao();
};

module.exports = createItemDao;
