const { Model } = require('objection');

const createItemPriceModel = () => {
  class ItemPriceModel extends Model {
    static tableName = 'item_prices';
  }

  return ItemPriceModel;
};

module.exports = createItemPriceModel;
