onload = () => {
  if (songs[currentSong].state === true) {
    favBtn.innerHTML = " favorite ";
    favBtn.style.color = "orangered";
  } else {
    favBtn.innerHTML = " favorite_border ";
    favBtn.style.color = "#252525";
  }
  const element = songs[currentSong];
  footerSongImg.src = element.cover;
  footerSongName.innerHTML = element.name;
  footerSongArtist.innerHTML = element.artist;
  music.src = element.path;
};
// create the list of songs
let music = document.getElementById("audio");
let songsUl = document.querySelector(".songs");
let favBtn = document.getElementById("favBtn");
let mode = "repeat";
let listMode = "all";
for (let i = 0; i < songs.length; i++) {
  const element = songs[i];
  let song = createElement(element, i);
  songsUl.innerHTML += song;
}
//============================ toggle between songs and favourites ============================
let songsLink = document.getElementById("songs");
let favouritesLink = document.getElementById("favourites");
let listType = document.getElementById("listType");
songsLink.addEventListener("click", (eo) => {
  songsUl.style.display = "block";
  favouritesUl.style.display = "none";
  songsLink.classList.add("active");
  favouritesLink.classList.remove("active");
  listType.innerHTML = "All songs";
  listMode = "all";
});
favouritesLink.addEventListener("click", (eo) => {
  favouritesUl.style.display = "block";
  songsUl.style.display = "none";
  favouritesLink.classList.add("active");
  songsLink.classList.remove("active");
  listType.innerHTML = "Favourites";
  listMode = "fav";
});
//==================== load a song =======================
let footerSongImg = document.getElementById("footer-song-img");
let footerSongName = document.querySelector(".footer-song-name");
let footerSongArtist = document.querySelector(".footer-song-artist");
let footer = document.querySelector("footer");
let imgInfo = document.querySelector(".img-info");
let expand = document.querySelector(".expand");
let playlistBtn = document.getElementById("playlist");
let shuffleBtn = document.getElementById("shuffle");
function testMode() {
  switch (shuffleBtn.innerHTML) {
    case " shuffle ":
      shuffleBtn.innerHTML = " repeat ";
      mode = "repeat";
      break;
    case " repeat ":
      shuffleBtn.innerHTML = " repeat_one ";
      mode = "repeat_one";
      break;
    case " repeat_one ":
      shuffleBtn.innerHTML = " shuffle ";
      mode = "shuffle";
      break;
  }
}
shuffleBtn.addEventListener("click", () => testMode());
const loadSong = (currentIndex) => {
  currentSong = currentIndex;
  localStorage.setItem("index", currentSong);
  if (songs[currentIndex].state === true) {
    favBtn.innerHTML = " favorite ";
    favBtn.style.color = "orangered";
  } else {
    favBtn.innerHTML = " favorite_border ";
    favBtn.style.color = "#252525";
  }
  switch (listMode) {
    case "all":
      const element = songs[currentIndex];
      footerSongImg.src = element.cover;
      footerSongName.innerHTML = element.name;
      footerSongArtist.innerHTML = element.artist;
      music.src = element.path;
      break;
    case "fav":
      const element1 = fav[currentIndex];
      if (element1 != "") {
        footerSongImg.src = element1.cover;
        footerSongName.innerHTML = element1.name;
        footerSongArtist.innerHTML = element1.artist;
        music.src = element1.path;
      } else {
        nextSong();
      }
      break;
  }
  playMusic();
};
function expandPlayer() {
  footer.classList.add("player");
  document.querySelector("main").style.display = "none";
}
function unExpandPlayer() {
  footer.classList.remove("player");
  document.querySelector("main").style.display = "block";
}
imgInfo.addEventListener("click", () => expandPlayer());
expand.addEventListener("click", () => unExpandPlayer());
playlistBtn.addEventListener("click", () => unExpandPlayer());
//==================== play and pause music ========================
let playBtn = document.getElementById("play");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");
function playMusic() {
  playBtn.innerHTML = " pause ";
  music.play();
}
function pauseMusic() {
  playBtn.innerHTML = " play_arrow ";
  music.pause();
}
playBtn.addEventListener("click", () => {
  if (playBtn.innerHTML == " play_arrow ") {
    playMusic();
  } else {
    pauseMusic();
  }
});
//====================  next song  ========================
let nextSong = () => {
  switch (listMode) {
    case "all":
      if (currentSong < songs.length - 1) {
        currentSong++;
      } else {
        currentSong = 0;
      }
      break;

    case "fav":
      if (currentSong < fav.length - 1) {
        currentSong++;
      } else {
        currentSong = 0;
      }
      break;
  }
  loadSong(currentSong);
  playMusic();
};
nextBtn.addEventListener("click", () => {
  switch (mode) {
    case "shuffle":
      currentSong = Math.floor(Math.random() * songs.length);
      loadSong(currentSong);
      break;
    default:
      nextSong();
      break;
  }
});
//====================  previous song  ========================
let prevSong = () => {
  switch (listMode) {
    case "all":
      if (currentSong > 0) {
        currentSong--;
      } else {
        currentSong = songs.length - 1;
      }
      break;

    case "fav":
      if (currentSong > 0) {
        currentSong--;
      } else {
        currentSong = fav.length - 1;
      }
      break;
  }
  loadSong(currentSong);
  playMusic();
};
prevBtn.addEventListener("click", () => prevSong());
//====================  input and timing   ========================
let currenttime = document.querySelector(".currentTime");
let songDuration = document.querySelector(".duration");
let progressBar = document.getElementById("progressBar");
const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = `0${min}`;
  }
  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0${sec}`;
  }
  time = `${min}:${sec}`;
  return time;
};
music.addEventListener("loadeddata", () => {
  songDuration.innerHTML = formatTime(music.duration);
});
const progress = () => {
  progressBar.min = 0;
  progressBar.max = music.duration;
  progressBar.value = music.currentTime;
};
setInterval(() => {
  progress();
  currenttime.innerHTML = formatTime(music.currentTime);
}, 1000);
progressBar.addEventListener("change", () => {
  music.currentTime = progressBar.value;
  playMusic();
});
music.addEventListener("ended", () => {
  console.log(mode);
  switch (mode) {
    case "repeat":
      nextSong();
      break;
    case "repeat_one":
      music.currentTime = 0;
      playMusic();
      break;
    case "shuffle":
      currentSong = Math.floor(Math.random() * songs.length);
      loadSong(currentSong);
      break;
  }
});

//====================  favourites button   ========================
favBtn.addEventListener("click", () => {
  if (favBtn.innerHTML == " favorite_border ") {
    fav.splice(currentSong, 1, songs[currentSong]);
    songs[currentSong].state = true;
    favBtn.innerHTML = " favorite ";
    favBtn.style.color = "orangered";
    let song = createElement(fav[currentSong], currentSong);
    favouritesUl.innerHTML += song;
  } else {
    favBtn.innerHTML = " favorite_border ";
    favBtn.style.color = "#252525";
    songs[currentSong].state = false;
    fav.splice(currentSong, 1, "");
    favouritesUl.innerHTML = "";
    for (let i = 0; i < fav.length; i++) {
      const element = fav[i];
      if (element != "") {
        let song = createElement(element, i);
        favouritesUl.innerHTML += song;
      }
    }
  }
  console.log(favouritesUl);
  localStorage.setItem("song", JSON.stringify(songs));
  localStorage.setItem("fav", JSON.stringify(fav));
});

// localStorage.clear();
