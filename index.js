// create an array that has a nested array with the length of the number parameter
// loop through the array by incrementing a certain number
// create an array an store enough data to match the length of number pof parameter
// push those arrays into the empty array 
// call the empty array and the output and the output should be an array with empty array

function makeChunk(data, number) {
  let nestedArray = [];
  for(let i = 0; i < data.length; i += number) {
    nestedArray.push(data.slice(i, i + number));
  }
  return nestedArray;
}

console.log(makeChunk([2, 4, 5, 6, 7, 8, 1, 2, 3], 4));