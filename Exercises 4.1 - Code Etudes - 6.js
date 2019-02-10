//Write a function that takes an object parameter and prints out the content of the object nicely.
//Each line of output, from console.log, should show each key and its associated value.
//This function should work on any object, with any number of keys, and not only on our particular example object.

let my_obj = {
  First_Name: "Jimi",
  Last_Name: "Hendrix",
  City: "Seattle",
  State: "WA",
  Zip: 98121,
  Year_Of_Birth: 1942 };

function pretty_print(obj){
  let nice_result = '';
  let method

  for(method in obj) {
    nice_result += method + ': ' + obj[method] + ' ' + '\n';

  } return nice_result;
}

console.log(pretty_print(my_obj))
