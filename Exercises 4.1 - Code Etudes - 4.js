//Write a function called "arrays_equal" that takes two array parameters.
//When the arrays are the same, meaning they are the same length and all of their corresponding elements are equivalent,
//the function returns true.
//Otherwise, it should return false.

let band1 = ['bass', 'guitar', 'drums', 'keyboard'];

let band2 = ['bass', 'guitar', 'drums', 'keyboard'];

let band3 = ['bass', 'saxophone', 'drums', 'keyboard'];

let band4 = ['bass', 'guitar', 'drums', 'keyboard', 'singer']

function arrays_equal(a,b) {
let i;
let result = 0;

if(a.length != b.length){
  return false;
}

for(let i = 0; i < a.length ; i++) {
result += a[i].localeCompare(b[i]);
}  if(result != 0){
     return false;
    }  else {
     return true
    }
}

console.log(arrays_equal(band1, band3));
