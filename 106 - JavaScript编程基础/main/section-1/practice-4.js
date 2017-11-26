'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  const resultArray = [];
  collectionA.forEach(object => {
    if (objectB.value.includes(object.key)) {
      resultArray.push(object.key);
    }
  });
  return resultArray;
};
