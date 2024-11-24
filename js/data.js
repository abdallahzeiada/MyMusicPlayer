// localStorage.clear()
let index;
let songs;
let fav;
let currentSong;
if (localStorage.index != null) {
  currentSong = JSON.parse(localStorage.index);
} else {
  currentSong = 0;
}
localStorage.setItem("index", currentSong);
if (localStorage.song != null) {
  songs = JSON.parse(localStorage.song);
} else {
  songs = [
    {
      name: "Обійми ",
      artist: "Ahmed_Fahmi",
      path: "assets/audio/Обійми (Remix)(MP3_160K)_1.mp3",
      cover: "assets/imgs/o6.webp",
      state: false,
      color: "#e5af6f90",
    },
    {
      name: "Without Me - Halsey _ Slowed   Reverb",
      artist: "Amr_Diab",
      path: "assets/audio/Without Me - Halsey _ Slowed   Reverb _(MP3_160K).mp3",
      cover: "assets/imgs/without me.webp",
      state: false,
      color: "#03154490",
    },
    {
      name: "Post_Malone_-_Rockstar_ft._21_Savage___Arabic_sub",
      artist: "Ahmed_Mashal",
      path: "assets/audio/Post_Malone_-_Rockstar_ft._21_Savage___Arabic_sub(MP3_128K).mp3",
      cover: "assets/imgs/post malon.webp",
      state: false,
      color: "#4d653090",
    },
    {
      name: "Linkin Park - In The End (Mellen Gi _ Tommee Profitt Remix)",
      artist: "Ahmed_Mashal",
      path: "assets/audio/Linkin Park - In The End (Mellen Gi _ Tommee Profitt Remix)(M4A_128K).m4a",
      cover: "assets/imgs/linking park.webp",
      state: false,
      color: "#f0716790",
    },
    {
      name: "Günay Aksoy - Her Yer Karanlık",
      artist: "Karioke",
      path: "assets/audio/Günay Aksoy - Her Yer Karanlık - (Official Video)(MP3_160K)_1.mp3",
      cover: "assets/imgs/her yar.webp",
      state: false,
      color: "#6e482990",
    },
    {
      name: "Billie Eilish_ Khalid - lovely",
      artist: "Amorf",
      path: "assets/audio/Billie Eilish_ Khalid - lovely(M4A_128K).m4a",
      cover: "assets/imgs/billie.webp",
      state: false,
      color: "#f0716790",
    },
    {
      name: "Alican  Yandım Ay Aman Official Music",
      artist: "Alican",
      path: "assets/audio/Alican  Yandım Ay Aman Official Music Video.mp3",
      cover: "assets/imgs/Alican.jpg",
      state: false,
      color: "#e3641490",
    },
  ];
}
// console.log(songs)
// songs[2].state = true;
// songs[3].state = true;
// songs[4].state = true;
localStorage.setItem("song", JSON.stringify(songs));
// let x = JSON.parse(localStorage.getItem(index.name));
// x["state"] = true;
// localStorage.setItem(`${index.name}`, JSON.stringify(x));
// console.log(JSON.parse(localStorage.getItem(index.name))["state"]);
// console.log(JSON.parse(localStorage.getItem(index.name)).name)

// localStorage.clear()
let favouritesUl = document.querySelector(".favourites");
function createElement(element, i) {
  let song = `
  <li class="song${i}" onclick="loadSong(${i})">
        <div class="main-song-img">
           <img src="${element.cover}" alt="alt" />
        </div>
        <div class="main-song-info">
          <p class="main-song-name">${element.name}</p>
          <p class="main-song-artist">${element.artist}</p>
        </div>
      </li>
  `;
  return song;
}
if (localStorage.fav != null) {
  fav = JSON.parse(localStorage.fav);
  for (let i = 0; i < fav.length; i++) {
    const element = fav[i];
    // console.log(element)
    if (element != "") {
      let song = createElement(element, i);
      favouritesUl.innerHTML += song;
    }
  }
} else {
  fav = [];
  for (let i = 0; i < songs.length; i++) {
    fav.push("");
  }
}
localStorage.setItem("fav", JSON.stringify(fav));
// localStorage.clear();
