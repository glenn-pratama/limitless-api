const validator = require('../libraries/validator_wrapper')();
const validatorSummarize = require('../libraries/validator_summarizer');

const createUseCaseLayer = (itemDao) => {
  class ItemUseCase {
    postItem = async (item) => {
      const result = { status: 'OK' };

      const validationRules = [
        [validator.isObjectAttrEmpty(item, 'name'), 'Name cannot empty'],
        [validator.isObjectAttrEmpty(item, 'description'), 'Description cannot empty'],
        [validator.isObjectAttrEmpty(item, 'sourceType'), 'SourceType cannot empty'],
        [validator.isObjectAttrInteger(item, 'monitorFrequency'), 'MonitorFrequency must be integer'],
        [validator.isObjectAttrValidUrl(item, 'url'), 'Incorrect url format'],
      ];

      const errorMessages = validatorSummarize(validationRules);

      if (errorMessages.length !== 0) {
        result.status = 'NOK';
        result.message = 'Validation failed';
        result.details = errorMessages;

        return result;
      }

      const itemInserted = await itemDao.insertItem(item);
      result.data = itemInserted;

      return result;
    }

    listItems = async (perPage, currentPage) => {
      const result = { status: 'OK' };
      const { total, rows } = await itemDao.getItems(perPage, currentPage);

      result.total = total;
      result.data = rows;

      return result;
    }
  }

  return new ItemUseCase();
};

module.exports = createUseCaseLayer;
