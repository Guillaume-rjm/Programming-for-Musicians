//Assignment 4 - Part 1

//building the arrays_equal function to compare two arrays

function arrays_equal(thisArray, otherArray){
  let i = 0;
  if( thisArray.length != otherArray.length){
    return false;
  }
  while(i < thisArray.length){
    if( thisArray[i] != otherArray[i]){
      return false;
    }
    i++;
  }
  return true;
}

//building a set from an Array with an additional value

let test_set = [1,2,3], new_set;

function myset_add(data, new_value) {

data.push(new_value)
let new_set = new Set(data);

return new_set
}

console.log(myset_add(test_set,3))

new_set = myset_add(test_set, 3);
if ( ! arrays_equal(new_set, [1,2,3]) ) {
  console.log("Failed adding existing data");
}

new_set = myset_add(test_set, 4);
if ( ! arrays_equal(new_set, [1,2,3,4]) ) {
  console.log("Failed adding new data");
}

//removing data from initial array
// function myset_remove(data, remove_value) { ... }

let test_set2 = [1,2,3], new_set2;

function myset_remove(data, new_value) {

data.pop(new_value)
let new_set2 = new Set(data);

return new_set2
}
console.log(myset_remove(test_set2,3))



test_set2 = [1,2,3];
new_set2 = myset_remove(test_set2, 3);
if ( ! arrays_equal(new_set2, [1,2]) ) {
  console.log("Remove failed");
}


// // Return true if test_value is in the set, false otherwise
// function myset_has(data, test_value) { ... }
//
// function myset_size(data) { ... }
