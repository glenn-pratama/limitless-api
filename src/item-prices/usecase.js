/**
 * TODO:
 * - scrap web page
 * - extract data needed
 * - save to table item_prices, item_images
 * - update last_run in table item_urls
 */

const createUseCaseLayer = (itemUrlDao) => {
  class ItemPriceUseCase {
    collectPrice = async () => itemUrlDao.getActiveItemUrl()
  }

  return new ItemPriceUseCase();
};

module.exports = createUseCaseLayer;
