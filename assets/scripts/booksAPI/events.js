'use strict';

const api = require('./api');
const ui = require('./ui');

const onGetBooks = function (event) {
  event.preventDefault();
  api.indexBooks()
    .then(ui.getBooksSuccess)
    .catch(ui.failure);
};

module.exports = {
  onGetBooks,
};
