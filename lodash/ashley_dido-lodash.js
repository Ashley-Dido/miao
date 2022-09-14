var ashley_dido = {
  chunk: function (array, size = 1) {
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
  },

  compact: function (array) {
    let filter = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        filter.push(array[i]);
      }
    }
    return filter;
  },

  difference: function (array, values) {
    let filter = [];
    for (let key in array) {
      if (!(key in values)) {
        filter.push(key);
      }
    }
    return filter;
  },
};
