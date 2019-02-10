//Write a function that will reverse the contents of an array. Do not use the built-in ".reverse()" function.

function reverse_array(){
let array = ["Hello"," my ","name ", " is "," Guillaume"];
let result = '';

for(let i = 1; i <= array.length; i++){
  result += array[array.length - i];
  } return result
}
console.log(reverse_array())
