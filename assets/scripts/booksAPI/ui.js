'use strict';

const getBooksSuccess = (data) => {
  if (data.book) {
    console.table(data);
  }
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  getBooksSuccess,
  failure,
};
