import uniqueRandomArray from 'unique-random-array';
import rp1Characters from './rp1-characters.json';

module.exports = {
  all: rp1Characters,
  random: uniqueRandomArray(rp1Characters) 
};
