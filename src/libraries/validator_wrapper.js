const validator = require('validator');
const _ = require('lodash');

const createValidatorWrapper = () => {
  class ValidatorWrapper {
    isObjectAttrEmpty = (checkedObject, checkedAttr) => _.has(checkedObject, checkedAttr)
      && !_.isEmpty(checkedObject[checkedAttr])

    isObjectAttrValidUrl = (checkedObject, checkedAttr) => _.has(checkedObject, checkedAttr)
      && validator.isURL(checkedObject[checkedAttr])

    isObjectAttrInteger = (checkedObject, checkedAttr) => _.has(checkedObject, checkedAttr)
      && _.isInteger(checkedObject[checkedAttr])
  }

  return new ValidatorWrapper();
};

module.exports = createValidatorWrapper;
