
module.exports = {
  sortArrayOfObjects: function(array,key) {
    return array.sort(function(b, a) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
};