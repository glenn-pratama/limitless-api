module.exports = promise => promise
  .then(data => ({ error: null, result: data }))
  .catch(error => ({ error }));
