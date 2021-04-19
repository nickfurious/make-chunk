let myObj = {
  a: 1,
  b: 2,
  c: 3
};

console.log(myObj);

function removeObj(obj, key) {
  delete obj[key];
  return obj;
}

console.log(removeObj(myObj, 'a'));