// console.log(arguments);
// console.log(require("module").wrapper);

const c = require("./test-module-1");
const cal1 = new c;
console.log(cal1.add(2,5));
console.log(cal1.multiply(2,5));
console.log(cal1.divide(20,5));

// exports
const clac2 = require("./test-module-2");
console.log(clac2.multiply(33,33));
const {add , divide , multiply} = require("./test-module-2");
console.log(multiply(2,5));

// caching
require("./test-module-3")();
require("./test-module-3")();
require("./test-module-3")();

