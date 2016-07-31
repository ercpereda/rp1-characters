/**
 * Ready Player One Characters Generator
 * @module rp1-characters
 */

import uniqueRandomArray from 'unique-random-array';
import rp1Characters from './rp1-characters.json';

const getRandomItem = uniqueRandomArray(rp1Characters);

/**
 * Return all characters.
 * @type {Object[]}
 */
module.exports.all = rp1Characters;

/**
 * Get random characters
 * @param {number} [n=1] - How many values should be return
 * @return {Object[]} - Return random characters
 */
module.exports.random = function(n) {
  if (n === undefined) {
    return getRandomItem();
  }

  let items = [];

  for (let i = 0; i < n; i++) {
    items.push(getRandomItem());
  }
  return items;
};
