const DDPathResolver = require('./');



const path = DDPathResolver({
  hoge2: 'fuga2',
  hoge3: {
    b: 'abc',
    c: {
      $root: 'def',
      d: 'ghi',
    },
  },
  'hoge4abc': 'hoge4/abc',
}, '');

const tests = [
  {str: void(0), result: ''},
  {str: 'hoge1', result: 'hoge1'},
  {str: 'hoge1/a', result: 'hoge1/a'},
  {str: 'hoge1/a/', result: 'hoge1/a'},
  {str: 'hoge1/a/b', result: 'hoge1/a/b'},
  {str: 'hoge1/a/b/ccc.html', result: 'hoge1/a/b/ccc.html'},

  {str: 'hoge2', result: 'fuga2'},
  {str: 'hoge2/a', result: 'fuga2/a'},
  {str: 'hoge2/a/', result: 'fuga2/a'},
  {str: 'hoge2/a/b', result: 'fuga2/a/b'},
  {str: 'hoge2/a/b/ccc.html', result: 'fuga2/a/b/ccc.html'},

  {str: 'hoge3', result: 'hoge3'},
  {str: 'hoge3/a', result: 'hoge3/a'},
  {str: 'hoge3/b', result: 'hoge3/abc'},
  {str: 'hoge3/b/def', result: 'hoge3/abc/def'},
  {str: 'hoge3/c', result: 'hoge3/def'},
  {str: 'hoge3/c/a', result: 'hoge3/def/a'},
  {str: 'hoge3/c/d', result: 'hoge3/def/ghi'},

  {str: 'hoge4abc', result: 'hoge4/abc'},
  {str: 'hoge4abc/and/b.html', result: 'hoge4/abc/and/b.html'},
];

const errors = [];
tests.forEach(test => {
  const result = path(test.str);
  if (result === test.result) {
    console.log(`ok: "${test.str}" >>> ${result}`);
  } else {
    errors.push(test);
    console.warn(`ng: "${test.str}" >>> ${result} 正しいのは "${test.result}"`);
  }
});

if (errors.length) {
  console.warn(`${errors.length}個のエラーがあります`);
} else {
  console.log('全て合格です');
}