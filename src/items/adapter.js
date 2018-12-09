const _ = require('lodash');

const usecase = require('./usecase')();
const to = require('../libraries/to');

const createItemAdapter = () => {
  class ItemAdapter {
    getItems = async (req, res) => res.send('items');

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
