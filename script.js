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
    'Best Of Me - BTS (방탄소년단)',
    'BBoom BBoom (뿜뿜) - MOMOLAND (모모랜드)',
    'Dionysus - BTS (방탄소년단)',
    'HELLEVATOR (헬리베이터) - Stray Kids'
]

// keep track of songs
let songIndex = 3

// initially load song
loadSong(songs[songIndex])

// update song details
function loadSong(song){
    const [titleText, artistText] = song.split(' - ');
    
    title.innerText = titleText.trim();
    document.getElementById('artist').innerText = artistText.trim();
    
    audio.src = `assets/music/${song}.mp3`;
    cover.src = `assets/images/${song}.jpg`;
}

const icon = playBtn.querySelector('i'); // Geen .fas meer nodig

function playSong(){
    musicContainer.classList.add('play');
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
    audio.play();
}

function pauseSong(){
    musicContainer.classList.remove('play');
    icon.classList.add('fa-play');
    icon.classList.remove('fa-pause');
    audio.pause();
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

function updateProgress(e) {
    const duration = audio.duration;
    const currentTime = audio.currentTime;

    if (duration) {
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
    }
}

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
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

audio.addEventListener('timeupdate', updateProgress)

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong)