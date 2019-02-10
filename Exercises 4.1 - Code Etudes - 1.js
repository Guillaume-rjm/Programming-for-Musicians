//Write a function that takes an array of integers and returns the average value of all the elements.

let numbers = [300,3,4,13,11,1,56,4], result;


function average(num) {
result = numbers.reduce((total, temp_num) => (total + temp_num) , 0);
return result / numbers.length
}

console.log(average(numbers))
