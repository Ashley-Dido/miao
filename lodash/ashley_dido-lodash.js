var ashley_dido = (function () {
  function chunk(array, size = 1) {
    let arr = [];
    let arr1 = [];
    for (let i = 0; i < array.length; i++) {
      arr1.push(array[i]);
      if (arr1.length == size) {
        arr.push(arr1);
        arr1 = [];
      }
    }
    if (arr1[0]) {
      arr.push(arr1);
    }
    return arr;
  }

  function compact(array) {
    let filter = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        filter.push(array[i]);
      }
    }
    return filter;
  }

  function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  }

  function drop(array, n = 1) {
    for (let i = 0; i < n; i++) {
      if (i > 0) {
        array.shift();
      }
    }
    return array;
  }

  function findIndex(array, f = (it) => it, startIndex = 0) {
    for (let i = startIndex; i < array.length; i++) {
      if (f(array[i])) {
        return i;
      }
    }
    return -1;
  }

  function findLastIndex(
    array,
    f = (it) => it,
    startIndex = array.lenngth - 1
  ) {
    for (let i = startIndex; i >= 0; i--) {
      if (f(array[i])) {
        return i;
      }
    }
    return -1;
  }

  function flatten(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (Array.isArray(item)) {
        for (let j = 0; j < item.length; j++) {
          result.push(item[j]);
        }
      } else {
        result.push(item);
      }
    }
    return result;
  }

  function flattenDeep(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (Array.isArray(item)) {
        let flattenItem = flattenDeep(item);
        for (let j = 0; j < flattenItem.length; j++) {
          result.push(flattenItem[j]);
        }
      } else {
        result.push(item);
      }
    }
    return result;
  }

  function flattenDepth(array, depth = 1) {
    if (depth == 0) {
      return array.slice();
    }
    let result = [];
    for (let i = 0; i < array.length; i++) {
      let item = array[i];
      if (Array.isArray(item)) {
        let flattenItem = flattenDepth(item, depth - 1);
        for (let j = 0; j < flattenItem; j++) {
          result.push(flattenItem[j]);
        }
      } else {
        result.push(item);
      }
    }
    return result;
  }

  function fromPairs(pairs) {
    let obj = {};
    for (let i = 0; i < pairs.length; i++) {
      obj[pairs[i][0]] = pairs[i][1];
    }
    return;
  }

  function head(array) {
    if (array.length == 0) {
      return undefined;
    } else {
      return array[0];
    }
  }

  function indexOf(array, value, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  }

  return {
    chunk,
    compact,
    fill,
    drop,
    findIndex,
    findLastIndex,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    lastIndexOf,
    // initial,
    // join,
    // last,
    // pull,
    // reverse,
    // every,
    // some,
    // countBy,
    // groupBy,
    // keyBy,
    // forEach,
    // map,
    // filter,
    // reduce,
    // reduceRight,
    // size,
    // sortBy,
    // sample,
    // isUndefined,
    // isNull,
    // isNil,
    // max,
    // min,
    // maxBy,
    // minBy,
    // round,
    // sumBy,
    // flagMap,
    // flatMapDepth,
    // get,
    // has,
    // mapKeys,
    // mapValues,
  };
})();
