//Assignment 4 - Part 2

let my_song = [
  { note: 'A', starts_at: 0, lasts: 3 },
  { note: 'B', starts_at: 0, lasts: 3 },
  { note: 'C', starts_at: 1.5, lasts: 1.5 }
];


let max_length  = Math.max.apply(Math, my_song.map(function(maxlasts) { return maxlasts.lasts; })) + Math.max.apply(Math, my_song.map(function(maxstarts) { return maxstarts.starts_at; }))

function play_piano(song){

for(let i = 0; i < max_length; i += 0.25){
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


// Time stamp, increment by 0.25s each time loop runs
// Time = 0s
// Play notes A and note B
// Time = 0.25s
// Time = 0.50s
// Time = 0.75s
// Time = 1s
// Time = 1.25s
// Time = 1.5s
// Play note C
// Time = 1.75s
// Time = 2s
// Time = 2.25s
// Time = 2.5s
// Time = 2.75s
// Time = 3s
// Release notes A, B and C
