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

// Second approach
function deleteProperty(myObj, prop) {
  let newObj = {};
  for(let key in myObj) {
    if(key !== prop) {
      newObj[key] = myObj[key];
    }
  }
  return newObj;
}

console.log(deleteProperty(myObj, 'b'));