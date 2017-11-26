'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  objectB.value.forEach(item => {
    const findResult = collectionA.find(obj => obj.key === item);
    if (findResult) {
      findResult.count--;
    }
  });
  return collectionA;
};
