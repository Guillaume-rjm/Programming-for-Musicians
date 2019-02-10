//Write a function called "flatten" that takes an array of arrays, then returns a new array with just the values, in the same order.
//"Flatten([[1,2], [3,4]])" should result in the array "[1,2,3,4]". Hint: look at the Array.concat function.
//Optional Bonus: Don't use any of the built-in array functions.

let array_example = [[1,2],[3,4]];

function flatten(array) {
 let new_array;
 new_array = array.reduce((array1, array2) => array1.concat(array2),[]);
 return new_array
}

console.log(flatten(array_example));

//Optional Bonus

function flatten2(array) {
let new_array = '';

for(let i = 0; i < array.length; i++) {
  new_array += array[i] + ',' + array[i+1];
  return new_array;
}
}

console.log(flatten2(array_example));
