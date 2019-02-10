//Assignment 4 - Part 2

let my_song = [
  { note: 'A', starts_at: 0, lasts: 3 },
  { note: 'B', starts_at: 0, lasts: 3 },
  { note: 'C', starts_at: 1.5, lasts: 1.5 }
];



function play_piano(song){
let max_length  = Math.max.apply(Math, song.map(function(maxlasts) { return maxlasts.lasts; })) + Math.max.apply(Math, song.map(function(maxstarts) { return maxstarts.starts_at; }))

for(let i = 0; i <= max_length; i += 0.25){
  console.log("Time: " + i)

  for(let object of song){

    if(object.starts_at === i){
      console.log("Play " + object.note)

  } if(object.starts_at + object.lasts === i){
    console.log("Release " + object.note)
  }
}

}
}

console.log(play_piano(my_song))


//--------------------TEST 1------------------------
console.log('\n')
console.log('TEST 1')
console.log('\n')

let my_song_test1 = [
  { note: 'A', starts_at: 0, lasts: 6 },
  { note: 'B', starts_at: 1, lasts: 3.25 },
  { note: 'C', starts_at: 2, lasts: 0.5 }
];

console.log(play_piano(my_song_test1))

//--------------------TEST 2------------------------
console.log('\n')
console.log('TEST 3')
console.log('\n')

let my_song_test2 = [
  { note: 'A', starts_at: 0, lasts: 0 },
  { note: 'B', starts_at: 0, lasts: 0 },
  { note: 'C', starts_at: 0, lasts: 0 }
];

console.log(play_piano(my_song_test2))

//--------------------TEST 3------------------------
console.log('\n')
console.log('TEST 3')
console.log('\n')

let my_song_test3 = [
  { note: 'A', starts_at: 0.13, lasts: 2.4 },
  { note: 'B', starts_at: 1.2, lasts: 3.4 },
  { note: 'C', starts_at: 1, lasts: 2.6 }
];

console.log(play_piano(my_song_test3))

//--------------------TEST 4------------------------
console.log('\n')
console.log('TEST 4')
console.log('\n')

let my_song_test4 = [
  { note: 'A', starts_at: 2, lasts: 0.25 },
  { note: 'B', starts_at: 2, lasts: 0 },
  { note: 'C', starts_at: 2, lasts: 0 }
];

console.log(play_piano(my_song_test4))
