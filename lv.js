// Array of songs (the Playlist)
// Ensure these MP3 files are present in your project folder or correct path is provided.
const playlist = [
    { title: "Once upon a time in Mumbai", src: "once upon a time in Mumbai.mp3" },
    { title: "Sajjan Raazi", src: "Sajjan Raazi.mp3" },
    { title: "Rangrez - Lakhwinder Wadali", src: "Rangrez - Lakhwinder Wadali.mp3" }
];

let currentTrackIndex = 0; // Starts with the first track (index 0)
// Get references to the HTML audio player and the track title element
const audioPlayer = document.getElementById('playlist-audio');
const trackTitle = document.getElementById('track-title');

// Function to load and display the track based on its index
function loadTrack(index) {
    // Logic to loop the playlist (go to last track from first, and vice-versa)
    if (index < 0) {
        currentTrackIndex = playlist.length - 1; // Go to the last track
    } else if (index >= playlist.length) {
        currentTrackIndex = 0; // Go to the first track
    } else {
        currentTrackIndex = index;
    }

    const track = playlist[currentTrackIndex];
    audioPlayer.src = track.src; // Set the audio source
    trackTitle.textContent = "Current Track: " + track.title; // Update the title displayed on the card
    audioPlayer.load(); // Load the new audio source

    // Event listener: When the current song ends, play the next one automatically
    audioPlayer.onended = function() {
        nextTrack();
    };
}

// Function to move to the next track
function nextTrack() {
    loadTrack(currentTrackIndex + 1);
    // Attempt to play the new track automatically
    audioPlayer.play().catch(error => {
        // This handles browser restrictions on autoplay (needs user interaction)
        console.log("Autoplay failed, user must initiate play.");
    }); 
}

// Function to move to the previous track
function prevTrack() {
    loadTrack(currentTrackIndex - 1);
    // Attempt to play the new track automatically
    audioPlayer.play().catch(error => {
        console.log("Autoplay failed, user must initiate play.");
    });
}

// Initialization: Load the first track when the entire window is loaded
window.onload = function() {
    loadTrack(currentTrackIndex);
};


// 🎧 SoundCloud Tracks
const soundcloudTracks = [
  {
    title: "Jeena Jeena - Atif Aslam",
    url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/hussnainraza82/jeena-jeena-atif-aslam&color=%23ff5500&auto_play=true&show_comments=true"
  },
  {
    title: "Tum Hi Ho - Arijit Singh",
    url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/arijitsinghmusic/tum-hi-ho-from-aashiqui-2&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
  },
  {
    title: "Labon Ko - KK",
    url:"https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/afzal-bhuiyan-1/labon-kof&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false"
  }
];

// DOM Elements
const scPlayer = document.getElementById("soundcloud-player");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentSC = 0;

// Function to load SoundCloud track
function loadSoundCloud(index) {
  if (index < 0) currentSC = soundcloudTracks.length - 1;
  else if (index >= soundcloudTracks.length) currentSC = 0;
  else currentSC = index;

  scPlayer.src = soundcloudTracks[currentSC].url;
}

// Button actions
prevBtn.addEventListener("click", () => loadSoundCloud(currentSC - 1));
nextBtn.addEventListener("click", () => loadSoundCloud(currentSC + 1));

// Initial load
window.addEventListener("DOMContentLoaded", () => {
  loadSoundCloud(currentSC);
});
