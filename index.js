let arr = [33, 21, 14, 3, 21, 21, 334, 579, 34, 565, 4345, 3987, 3];

for(let i = 0; i < arr.length; i++) {
  for(let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr.splice(j, 1);
      j--;
    }
  }
}
console.log(arr)

// Working with splice()
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo").innerHTML = fruits;

// function myFunction() {
//   fruits.splice(2, 0, "Lemon", "Kiwi");
//   document.getElementById("demo").innerHTML = fruits;
// }