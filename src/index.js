module.exports = function reverse (n) {
    var abs = Math.abs(n);

    if (n < 0) {
    return (abs.toString().split('').reverse().join(''));
    } else {
    return n.toString().split('').reverse().join('');
  };
};
