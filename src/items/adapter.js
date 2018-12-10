const _ = require('lodash');

const itemDao = require('./dao')();

const usecase = require('./usecase')(itemDao);
const to = require('../libraries/to');
const defaultValue = require('../libraries/defaultValue');

const createItemAdapter = () => {
  class ItemAdapter {
    getItems = async (req, res) => {
      let { perPage, currentPage } = req.query;

      perPage = defaultValue(perPage, 10);
      currentPage = defaultValue(currentPage, 1);

      const { error, result } = await to(usecase.listItems(perPage, currentPage));
      let returnValue = _.cloneDeep(result);
      let returnCode = 200;

      if (error) {
        returnValue = {
          status: 'NOK',
          message: 'Unable to process request',
        };
        returnCode = 500;
      }

      return res.status(returnCode).json(returnValue);
    };

    postItem = async (req, res) => {
      const { error, result } = await to(usecase.postItem(req.body));
      let returnValue = _.cloneDeep(result);
      let returnCode = 200;

      if (error) {
        returnValue = {
          status: 'NOK',
          message: 'Unable to process request',
        };
        returnCode = 500;
      }

      return res.status(returnCode).json(returnValue);
    }
  }

  return new ItemAdapter();
};

module.exports = createItemAdapter();
