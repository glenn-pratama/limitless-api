const ItemUrlModel = require('../item-urls/model')();

const createItemUrlDao = () => {
  class ItemUrlDao {
    getActiveItemUrl = async () => ItemUrlModel.query().where({ is_active: true })
  }

  return new ItemUrlDao();
};

module.exports = createItemUrlDao;
