const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
    {
        name: 'Philanthrope - Fade out',
        displayName: 'Fade out',
        artist: 'Philanthrope'
    },
    {
        name: 'Plusma - Parasol',
        displayName: 'Parasol',
        artist: 'Plusma'
    },
    {
        name: "Psalm Trees - Its Time to Grow",
        displayName: "It's Time to Grow",
        artist: 'Psalm Trees'
    },
    {
        name: 'Ryu Riders - Blue Moon Boys',
        displayName: 'Blue Moon Boys',
        artist: 'Ryu Riders'
    }
];

// Check if playing
let isPlaying = false;

// Play
const playSong = () => {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause')
    music.play();
};

// Pause
const pauseSong = () => {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    playBtn.setAttribute('title', 'Play');
    music.pause();
};

// Play or pause event listener
playBtn.addEventListener('click', () => {
    isPlaying ? pauseSong() : playSong()
});

// Function to add songs to DOM
const loadSong = song => {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
};

// Current song count
let songIndex = 0;

// Next Song function
const nextSong = () => {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    console.log(songIndex)
    loadSong(songs[songIndex]);
    playSong();
}

// Prev Song function
const prevSong = () => {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    console.log(songIndex)
    loadSong(songs[songIndex]);
    playSong();
}

// On load  - Select a random song
loadSong(songs[songIndex]);

// Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);