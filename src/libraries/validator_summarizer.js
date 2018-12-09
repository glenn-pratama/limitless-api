/**
 * @param validationActions multi-dimensional array
 *
 * ex:
 *
 * [
 *  [ <validation action1>, 'error message if fail to validate' ],
 *  [ <validation action2>, 'error message if fail to validate' ],
 * ]
 *
 */

module.exports = (validationActions) => {
  const errorMessages = [];

  for (let i = 0; i < validationActions.length; i += 1) {
    if (!validationActions[i][0]) {
      errorMessages.push(validationActions[i][1]);
    }
  }

  return errorMessages;
};
