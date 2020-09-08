    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  return arrays.reduce((item, item2) => item.concat(item2));
}

assert.deepEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);