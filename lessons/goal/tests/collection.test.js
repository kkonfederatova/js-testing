import getFunction from '../functions.js';

const get = getFunction();

if (get({ key: 'value' }, 'key') !== 'value') {
  throw new Error('The function does not work correctly!');
}

if (get({ key: 'value' }, 'key', 'default value') !== 'value') {
  throw new Error('The function does not work correctly!');
}

if (get({}, 'key', 'value') !== 'value') {
  throw new Error('The function does not work correctly!');
}