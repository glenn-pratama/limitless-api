const to = require('../libraries/to');

const itemUrlDao = require('../item-urls/dao')();
const usecase = require('./usecase')(itemUrlDao);

const createItemPriceAdapter = () => {
  class ItemPriceAdapter {
    collectPrice = async () => {
      const { error, result } = await to(usecase.collectPrice());

      if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        return Promise.resolve();
      }

      // eslint-disable-next-line no-console
      console.log(result);
      return Promise.resolve();
    }
  }

  return new ItemPriceAdapter();
};

module.exports = createItemPriceAdapter();
