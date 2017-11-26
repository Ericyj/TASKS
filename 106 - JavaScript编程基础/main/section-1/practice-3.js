'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  const resultArray = [];
  collectionA.forEach(item => {
    if (objectB.value.includes(item)) {
      resultArray.push(item);
    }
  });
  return resultArray;
};
