'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  const resultArray = [];
  collectionA.forEach(item => {
    if (collectionB[0].includes(item)) {
      resultArray.push(item);
    }
  });
  return resultArray;
};
