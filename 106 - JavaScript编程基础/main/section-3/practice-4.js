'use strict';
const statisticArray = require('../section-2/practice-2');
const discountArray = require('../section-3/practice-2');
module.exports = function createUpdatedCollection(collectionA, objectB) {
  const result = statisticArray(collectionA);
  return discountArray(result, objectB);
};