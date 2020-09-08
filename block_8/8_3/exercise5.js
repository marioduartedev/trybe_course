    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names.reduce(((acc, currentValue) => acc += currentValue.split('').filter(letter => letter === 'A' || letter === 'a').length),0)
}

assert.deepEqual(containsA(), 20);