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

// building a set from an Array with an additional value

let test_set = [1,2,3], new_set;

function myset_add(data, new_value) {
let result = []
    for (let i = 0; i < data.length; i++) {
          if(data[i] === new_value){
          result.push(data[i]);
          return data;
          }
        }
        data.push(new_value);
        return data;
      }


console.log(myset_add(test_set,3))

new_set = myset_add(test_set, 3);
if ( ! arrays_equal(new_set.sort(), [1,2,3]) ) {
  console.log("Failed adding existing data");
}

new_set = myset_add(test_set, 4);
if ( ! arrays_equal(new_set.sort(), [1,2,3,4]) ) {
  console.log("Failed adding new data");
}

//removing data from initial array

let test_set2 = [1,2,3], new_set2;

function myset_remove(data, new_value) {
  let result = []
      for (let i = 0; i < data.length; i++) {
      if (data[i] !== new_value){
        result.push(data[i]);
    }
  }
  return result;
}

console.log(myset_remove(test_set2,3))


test_set2 = [1,2,3];
new_set2 = myset_remove(test_set2, 3);
if ( ! arrays_equal(new_set2.sort(), [1,2]) ) {
  console.log("Remove failed");
}

//ADDITIONAL TESTING
//TEST 3
test_set3 = [1,2,3,3]

if (arrays_equal(myset_add(test_set3, 3), [1,2,3,3] ) ) {
console.log("test successful");
} else {
  console.log("test failed")
}

//TEST 4
test_set4 = [1,2,3]

if (arrays_equal(myset_add(test_set4, 2), [1,2,3]) ) {
console.log("test successful");
} else {
  console.log("test failed")
}

//TEST 5
test_set5 = [1,2,3,4]

if (arrays_equal(myset_remove(test_set5,4), [1,2,3] )) {
  console.log("test successful");
  } else {
    console.log("test failed");
}

//TEST 6
test_set6 = [1,2,3,4]

if (arrays_equal(myset_remove(test_set6,3), [1,2,4] )) {
  console.log("test successful");
  } else {
    console.log("test failed");
}

//TEST 7
test_set7 = [1,2,3]

if (arrays_equal(myset_remove(test_set7,5), [1,2,3] )) {
  console.log("test successful");
  } else {
    console.log("test failed");
}
console.log(myset_remove(test_set7,5))
