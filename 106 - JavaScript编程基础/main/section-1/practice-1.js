'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  const resultArray = [];
  collectionA.forEach(item => {
    if (collectionB.includes(item)) {
      resultArray.push(item);
    }
  });
  return resultArray;
};
