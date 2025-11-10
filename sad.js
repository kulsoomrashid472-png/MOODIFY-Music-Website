const iframes = document.querySelectorAll('.video-box iframe');

iframes.forEach((iframe) => {
  iframe.addEventListener('mouseenter', () => {
    iframes.forEach((other) => {
      if (other !== iframe) {
        other.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
  });
});
// =========================================================
// 1. **Playlist Array**
// =========================================================
const playlist = [
    // EXAMPLE 1: Apne MP3 files ko 'music' folder mein rakhein
    { title: "Husn -Anuv Jain", path: "Husn Anuv Jain.mp3" }, 

    { title: "Afsos", path: "afsos.mp3" },

    { title: "Raanjhan", path: "Raanjhan.mp3" }, 
    { title: "Raabta", path: "Raabta.mp3" }

];

// Variables
let trackIndex = 0; // Shuruat mein pehle gaane ka index
const audioPlayer = document.getElementById('playlist-audio');
const trackTitleDisplay = document.getElementById('track-title');

// =========================================================
// 2. **Core Functions**
// =========================================================

/**

 * @param {number} index - Playlist mein gaane ka index.
 */
function loadTrack(index) {
    // Playlist looping (cycle through tracks)
    if (index < 0) {
        trackIndex = playlist.length - 1;
    } else if (index >= playlist.length) {
        trackIndex = 0;
    }

    const currentTrack = playlist[trackIndex];
    
    // Audio source aur title set karna
    audioPlayer.src = currentTrack.path;
    trackTitleDisplay.textContent = currentTrack.title;

    // Player ko reload karna
    audioPlayer.load();
}

// 3. **Next Track Function** (HTML button se call hota hai)
function nextTrack() {
    trackIndex++;
    loadTrack(trackIndex);
    // Button press par gaana chalana
    audioPlayer.play().catch(e => console.log("Play failed after Next button:", e)); 
}

// 4. **Previous Track Function** (HTML button se call hota hai)
function prevTrack() {
    trackIndex--;
    loadTrack(trackIndex);
    // Button press par gaana chalana
    audioPlayer.play().catch(e => console.log("Play failed after Previous button:", e));
}

// =========================================================
// 5. **Event Listeners**
// =========================================================

// Auto-play Next Track: Jab current gaana khatam ho jaye, toh agla gaana chalana
audioPlayer.addEventListener('ended', nextTrack);

// Initial load: Jab page load ho, toh pehla gaana load karein
window.onload = function() {
    // Sirf tab load karein jab playlist mein gaane hon
    if (playlist.length > 0) {
        loadTrack(trackIndex);
    } else {
        trackTitleDisplay.textContent = "Error: Playlist is empty! Please add song paths in scripts.js.";
    }
};


window.nextTrack = nextTrack;
window.prevTrack = prevTrack;


// Scroll animation: fade-in effect for iframes
document.addEventListener("DOMContentLoaded", () => {
  const iframes = document.querySelectorAll(".embed-container iframe");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  iframes.forEach((iframe) => {
    iframe.style.opacity = 0;
    iframe.style.transform = "translateY(20px)";
    iframe.style.transition = "all 0.6s ease-out";
    observer.observe(iframe);
  });
});

// Highlight iframe when clicked/playing
const embeds = document.querySelectorAll(".embed-container iframe");
embeds.forEach((iframe) => {
  iframe.addEventListener("mouseenter", () => {
    iframe.style.boxShadow = "0 0 20px rgba(255,85,0,0.7)";
  });
  iframe.addEventListener("mouseleave", () => {
    iframe.style.boxShadow = "0 0 20px rgba(255,85,0,0.3)";
  });
});
