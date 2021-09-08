function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: 'as-number' | 'as-text',
  ) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2 // add `+` to force convertion to a number for each input
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinedAges = combine(30, 21, 'as-number');
const combinedAgesString = combine('30', '21', 'as-number'); // 3rd argument is useful
const combinedNames = combine('anna', 'robin', 'as-text');

console.log({combinedAges}) // output => 51
console.log({combinedAgesString}) // output => 51
console.log({combinedNames}) // output => 'annarobin'