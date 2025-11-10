// ===== Chill Songs JS =====
const playlist = [
  { title: "Naache re", src: "Naache re.mp3" },
  { title: "Pasoori", src: "Pasoori.mp3" },
  { title: "Gotilo", src: "Gotilo.mp3" },
  { title: "Ilahi", src: "Ilahi.mp3" },
];

let currentTrack = 0;
const audioPlayer = document.getElementById("playlist-audio");
const trackTitle = document.getElementById("track-title");

window.addEventListener("DOMContentLoaded", () => loadTrack(currentTrack));

function loadTrack(index) {
  if (playlist[index]) {
    audioPlayer.src = playlist[index].src;
    trackTitle.textContent = playlist[index].title;
    audioPlayer.play().catch(() => {});
  }
}
function nextTrack() {
  currentTrack = (currentTrack + 1) % playlist.length;
  loadTrack(currentTrack);
}
function prevTrack() {
  currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
  loadTrack(currentTrack);
}
audioPlayer.addEventListener("ended", nextTrack);
