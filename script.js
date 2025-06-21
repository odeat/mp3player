const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// songs
const songs = [
    'Likey (라이키) - TWICE (트와이스)', 
    'Serendipity - Park Jimin',
    '고엽. Autumn Leaves - BTS (방탄소년단)',
    'Daydream (백일몽) - J-hope',
    'Best Of Me - BTS (방탄소년단)',
    'BBoom BBoom (뿜뿜) - MOMOLAND (모모랜드)',
    'Dionysus - BTS (방탄소년단)',
    'HELLEVATOR (헬리베이터) - Stray Kids'
]

// keep track of songs
let songIndex = 4

// initially load song
loadSong(songs[songIndex])

// update song details
function loadSong(song){
    title.innerText = song;
    audio.src = `assets/music/${song}.mp3`;
    cover.src = `assets/images/${song}.jpg`;
}

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')

    audio.play()
}

function pauseSong(){
    playBtn.querySelector('i.fas').classList.add('fa-play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')

    audio.pause()
}

function prevSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length -1
    }
    loadSong(songs[songIndex])   
    playSong()   
}

function nextSong(){
    songIndex++

    if(songIndex > songs.length -1){
        songIndex = 0
    }
    loadSong(songs[songIndex])   
    playSong()   
}

// event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }
        else{
            playSong()
        }
})

// change song event
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)