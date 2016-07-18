const uniqueRandomArray = require('unique-random-array');
const rp1Characters = require('./rp1-characters.json');

module.exports = {
  all: rp1Characters,
  random: uniqueRandomArray(rp1Characters) 
};
