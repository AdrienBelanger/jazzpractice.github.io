function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        overlay.style.display = "none"; // Hide overlay
    } else {
        sidebar.classList.add('open');
        overlay.style.display = "block"; // Show overlay
    }
}

function closeSidebar() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("overlay");
    sidebar.classList.remove('open');
    overlay.style.display = "none"; // Hide overlay
}


function playAudio() {
    var audioPlayer = document.getElementById("audioPlayer");
    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById("pauseButton");

    audioPlayer.play();
    playButton.style.display = "none";
    pauseButton.style.display = "inline-block";
}

function pauseAudio() {
    var audioPlayer = document.getElementById("audioPlayer");
    var playButton = document.getElementById("playButton");
    var pauseButton = document.getElementById("pauseButton");

    audioPlayer.pause();
    playButton.style.display = "inline-block";
    pauseButton.style.display = "none";
}
