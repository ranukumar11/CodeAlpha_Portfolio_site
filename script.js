const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const trackTitle = document.getElementById("track-title");

const tracks = [
  { title: "Song 1", src: "music/song1.mp3" },
  { title: "Song 2", src: "music/song2.mp3" },
  { title: "Song 3", src: "music/song3.mp3" }
];

let currentTrack = 0;

function loadTrack(index) {
  audio.src = tracks[index].src;
  trackTitle.textContent = tracks[index].title;
}

function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
}

function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playBtn.textContent = "⏸️";
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
  audio.play();
  playBtn.textContent = "⏸️";
}

playBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", nextTrack);
prevBtn.addEventListener("click", prevTrack);

loadTrack(currentTrack);
