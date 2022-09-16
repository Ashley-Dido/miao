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

  return {
    chunk,
    compact,
    fill,
    drop,
    findIndex,
    findLastIndex,
    // flatten,
    // flattenDeep,
    // flattenDepth,
    // fromPairs,
    // head,
    // indexOf,
    // lastIndexOf,
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
