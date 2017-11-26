'use strict';

module.exports = function countSameElements(collection) {
  const resultArray = [];
  collection.forEach(item => {
    const findResult = resultArray.find(object => object.key === item);
    if (findResult) {
      ++findResult.count;
    } else {
      resultArray.push({
        key: item,
        count: 1
      });
    }
  });
  return resultArray;
};
