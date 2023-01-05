
let audio = document.getElementById('audio');
let playbutton = document.getElementById('pause-play');
let previous = document.getElementById('previous');
let next = document.getElementById('next');
let songstitle = document.querySelector('#song-title');
let songsartist = document.querySelector('#song-artist');
let pause = document.getElementById('play-pause');
let heading = document.getElementById('heading');



let songs = [
    { 
      artist: '5 Seconds of Summer',
      songsname:  'The Chainsmokers Who Do You Love Ft. 5 Seconds Of Summer - The Chainsmokers'
    }, 
    {
        artist: 'Taylor Swift',
       songsname: 'Taylor Swift - Blank Space'
    },
    {
      artist: '5 Seconds of Summer',
      songsname: '5 Seconds of Summer Dont Stop',
    },
    {
      artist: 'The Train',
      songsname: 'Train_-_Hey_Soul_Sister',
    }
  ]

let songindex = 0;

const allsongs = (songs) =>{
    console.log(songs)
 songsartist.innerText = songs.artist;
 songstitle.innerText = songs.songsname;
 audio.src = 'music/' + songs.songsname + '.mp3';
}

allsongs(songs[songindex])


const playsongs = () => {
   audio.play()
}

const pausesongs = () =>{
   audio.pause();
}
// previous button
previous.addEventListener('click', () =>{
    songindex--;

     if(songindex < 0){
         songindex =  songs.length -1;
     }
     allsongs(songs[songindex])
     playsongs();
})

// next songs button
next.addEventListener('click', () =>{
    songindex++;
if(songindex  > songs.length - 1){
    songindex = 0;
}
    allsongs(songs[songindex])
    playsongs();
})

// playbutton
playbutton.addEventListener('click', () =>{
   playsongs()
})

// pausebutton
pause.addEventListener('click', () =>{
  pausesongs();
})