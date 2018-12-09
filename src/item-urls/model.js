const { Model } = require('objection');

const createItemUrlModel = () => {
  class ItemUrlModel extends Model {
    static tableName = 'item_urls';
  }

  return ItemUrlModel;
};

module.exports = createItemUrlModel;
