var Ashley_Dido = {
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
    if (arr1 !== []) {
      arr.push(arr1);
    }
    return arr;
  },
};
