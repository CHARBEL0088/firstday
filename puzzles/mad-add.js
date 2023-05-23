// 'use strict';

// function madAdd(/* fill code here */) {
//   // fill code here
// }

// console.log(+madAdd(1, 3)(1)(2, 3, 5)); // logs 15
// console.log(+madAdd(2)(madAdd(madAdd(1, 3))(2, 3, 0, 2))); // logs 13




'use strict';

function madAdd(...args) {
  let sum = args.reduce((acc, val) => acc + val, 0);

  function add(...args) {
    sum += args.reduce((acc, val) => acc + val, 0);
    return add;
  }

  add.valueOf = function () {
    return sum;
  };

  return add;
}

console.log(+madAdd(1, 3)(1)(2, 3, 5)); // logs 15
console.log(+madAdd(2)(madAdd(madAdd(1, 3))(2, 3, 0, 2))); // logs 13
