var audio;
var playButton;
var isPlaying = false;

window.onload = function() {
  audio = document.getElementById("audio");
  playButton = document.getElementById("play-button");
}

function toggleAudio() {
  if (isPlaying) {
    audio.pause();
    playButton.textContent = "No puede ser, extraño levitar";
  } else {
    audio.currentTime = 152.5;
    audio.play().then(function() {
      playButton.textContent = "Dejar de levitar";
    }).catch(function(error) {
      console.log(error);
    });
  }
  isPlaying = !isPlaying;
}