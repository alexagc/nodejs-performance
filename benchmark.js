const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const map = require('lodash.map');

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// add tests
suite
  .add('Lodash map', function() {
    map(array, value => value + 1);
  })
  .add('Native map', function() {
    array.map(value => value + 1);
  })
  .on('cycle', function(event) {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  .run({ async: true });
