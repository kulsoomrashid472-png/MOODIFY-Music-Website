// Fade-in animation for music sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".music-section");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Small hover effect for iframe embeds
const embeds = document.querySelectorAll("iframe");
embeds.forEach((frame) => {
  frame.addEventListener("mouseenter", () => {
    frame.style.transform = "scale(1.02)";
    frame.style.transition = "0.4s ease";
    frame.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
  });

  frame.addEventListener("mouseleave", () => {
    frame.style.transform = "scale(1)";
    frame.style.boxShadow = "none";
  });
});





const tracks = [
  {
    title: "Gallan Goodiyaan Dil Dhadakne Do",
    src: "Gallan Goodiyaan Dil Dhadakne Do.mp3"
  },
  {
    title: "Jhol",
    src: "Jhol.mp3"
  },
  {
    title: "ek lamha",
    src: "ek lamha.mp3"
  },
  {
    title: "dil jhoom",
    src: "dil jhoom.mp3"
  }
];

let currentTrack = 0;
const audio = document.getElementById("playlist-audio");
const trackTitle = document.getElementById("track-title");

// Function to load a track
function loadTrack(index) {
  const track = tracks[index];
  audio.src = track.src;
  trackTitle.textContent = track.title;
  audio.play();
}

// Next & Previous controls
function nextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
}

function prevTrack() {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
}

// Auto-play next song when current one ends
audio.addEventListener("ended", nextTrack);

// Load first track when page opens
window.addEventListener("DOMContentLoaded", () => {
  loadTrack(currentTrack);
});






