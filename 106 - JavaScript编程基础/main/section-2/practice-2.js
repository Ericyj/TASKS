'use strict';

function flatCollection(collection) {
  collection.forEach((item, index) => {
    if (item.length > 1) {
      const [value, count] = item.split('-');
      collection.splice(index, 1, ...new Array(parseInt(count)).fill(value));
    }
  });
  return collection;
}

module.exports = function countSameElements(collection) {
  collection = flatCollection(collection);
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
