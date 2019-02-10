//Given an array of objects with "first_name" and "last_name" fields, write a callback for the ".sort" function to sort the names alphabetically by last name.
//If two last names are the same, then sort those by first name.

let contacts = [
  { first_name: 'Bob',
    last_name: 'Sponge'},
  { first_name: 'Patrick',
    last_name: 'Star'},
  { first_name: 'Nigel',
    last_name: 'British'},
  { first_name: 'Kim',
    last_name: 'British'},
  { first_name: 'Ringo',
    last_name: 'Star'},
  ];

function sortlastname(a,b) {
  if (a.last_name < b.last_name)
    return -1;
  if (a.last_name > b.last_name)
    return 1;
  if ((a.last_name == b.last_name) & (a.first_name < b.first_name))
    return -1;
  if ((a.last_name == b.last_name) & (a.first_name > b.first_name))
    return 1;
    return 0;
}

console.log(contacts.sort(sortlastname));
