module.exports = (currentValue, defaultValue) => {
  let returnValue = currentValue;

  if (!currentValue || currentValue < 1) {
    returnValue = defaultValue;
  }

  return returnValue;
};
