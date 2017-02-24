'use strict';

const getBooksSuccess = (data) => {
  console.table(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  getBooksSuccess,
  failure,
};
