const { Model } = require('objection');

const createItemModel = () => {
  class ItemModel extends Model {
    static tableName = 'items';
  }

  return ItemModel;
};

module.exports = createItemModel;
