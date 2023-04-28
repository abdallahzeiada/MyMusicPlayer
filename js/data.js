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
      name: "Attar  Geet  عطار  جيت  انا جيت اكحلها عميت ",
      artist: "Attar",
      path: "assets/audio/yt1s.com - Attar  Geet  عطار  جيت  انا جيت اكحلها عميت .mp3",
      cover: "assets/imgs/Attar.jpg",
      state: false,
      color: "#80020090",
    },
    {
      name: "نور الدين الطيار - عيني ليك ياليل",
      artist: "Nour_Eldin",
      path: "assets/audio/نور الدين الطيار - عيني ليك ياليل.mp3",
      cover: "assets/imgs/XourEldeen.jpg",
      state: false,
      color: "#4d653090",
    },
    {
      name: "Ahmed Fahmi - Elly Messabarny",
      artist: "Ahmed_Fahmi",
      path: "assets/audio/Ahmed Fahmi - Elly Messabarny .mp3",
      cover: "assets/imgs/ahmed-fahmi.jpg",
      state: false,
      color: "#e5af6f90",
    },
    {
      name: "Amr Diab - Wenendam",
      artist: "Amr_Diab",
      path: "assets/audio/Amr Diab - Wenendam .mp3",
      cover: "assets/imgs/Amr-diab.jpg",
      state: false,
      color: "#03154490",
    },
    {
      name: "أغنية _ دمع العين _ احمد مشعل ",
      artist: "Ahmed_Mashal",
      path: "assets/audio/أغنية _ دمع العين _ احمد مشعل .mp3",
      cover: "assets/imgs/Amed-masal-damaEleen.jpg",
      state: false,
      color: "#4d653090",
    },
    {
      name: "اغنيه  _ دخان _ غناء  احمد مشعل.",
      artist: "Ahmed_Mashal",
      path: "assets/audio/اغنيه  _ دخان _ غناء  احمد مشعل.mp3",
      cover: "assets/imgs/Ahmed-masal-dokhaan.jpg",
      state: false,
      color: "#f0716790",
    },
    {
      name: "انا نجم.",
      artist: "Karioke",
      path: "assets/audio/انا نجم.mp3",
      cover: "assets/imgs/Ana-Negm-Amir-Eid-Rivo.jpg",
      state: false,
      color: "#6e482990",
    },
    {
      name: "ديدو_ أغنية تركية حزينة بصوت رائع _ Amorf - Dido",
      artist: "Amorf",
      path: "assets/audio/ديدو_ أغنية تركية حزينة بصوت رائع _ Amorf - Dido(MP3_160K).mp3",
      cover: "assets/imgs/dido.jpg",
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
