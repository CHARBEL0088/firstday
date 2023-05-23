// 'use strict';

// function logAfter(seconds, callback) {
//   setTimeout(() => console.log(`${seconds} seconds have passed`) + (callback && callback()), seconds * 1000);
// }

// let standInLine = (() => {
//   // Fill the missing code here
// })();

// {
//   let politeLogAfter = standInLine(logAfter);
//   politeLogAfter(5);
//   politeLogAfter(3);
//   politeLogAfter(4);
// }


'use strict';

function logAfter(seconds, callback) {
  setTimeout(() => console.log(`${seconds} seconds have passed`), seconds * 1000);
  if (callback) {
    setTimeout(callback, seconds * 1000);
  }
}

let standInLine = (logAfter) => {
  let elapsedTime = 0;

  return (seconds) => {
    setTimeout(() => {
      elapsedTime += seconds;
      logAfter(elapsedTime);
    }, elapsedTime * 1000);
  };
};

{
  let politeLogAfter = standInLine(logAfter);
  politeLogAfter(5);
  politeLogAfter(3);
  politeLogAfter(4);
}


