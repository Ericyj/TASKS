'use strict';

function flatCollection(collection) {
  // 坑！
  // collection.forEach((item, index) => {
  //   console.log(item, index);
  //   if (item.length > 1) {
  //     const value = item.substr(0, 1);
  //     const count = parseInt(item.substring(2));
  //     collection.splice(index, 1, ...new Array(count).fill(value));
  //   }
  // });

  for (let i = 0; i < collection.length; i++) {
    if (collection[i].length > 1) {
      const value = collection[i].substr(0, 1);
      const count = parseInt(collection[i].substring(2));
      collection.splice(i, 1, ...new Array(count).fill(value));
    }
  }
  return collection;
}

module.exports = function countSameElements(collection) {
  collection = flatCollection(collection);
  const resultArray = [];
  collection.forEach(item => {
    const findResult = resultArray.find(object => object.name === item);
    if (findResult) {
      ++findResult.summary;
    } else {
      resultArray.push({
        name: item,
        summary: 1
      });
    }
  });
  return resultArray;
};
