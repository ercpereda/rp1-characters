import uniqueRandomArray from 'unique-random-array';
import rp1Characters from './rp1-characters.json';

const getRandomItem = uniqueRandomArray(rp1Characters);

module.exports = {
  all: rp1Characters,
  random
};

function random(n) {
  if (n === undefined) {
    return getRandomItem();
  }

  let items = [];

  for (let i = 0; i < n; i++) {
    items.push(getRandomItem());
  }
  return items;
}
