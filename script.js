/* =========================
   HOME MUSIC
========================= */

let homeMusic = document.querySelector("audio");

function toggleMusic(){

  if(homeMusic.paused){

    homeMusic.play();

  } else {

    homeMusic.pause();

  }

}

/* =========================
   NOVEL PLAY
========================= */

let novelMusic = document.getElementById("bg-music");

function mulaiStory(){

  if(novelMusic){

    novelMusic.volume = 0.2;

    novelMusic.play();

    setTimeout(() => {

      window.location.href = "Chapter1.html";

    },1000);

  }

}

/* =========================
   CHAPTER STORY
========================= */

let text = `aku sayang kamu`;

let index = 0;

let sedangJalan = false;

/* ===== TYPEWRITER ===== */

function ketikText(){

  if(index < text.length){

    document.getElementById("story").innerHTML += text.charAt(index);

    index++;

    setTimeout(ketikText,40);

  } else {

    sedangJalan = false;

  }

}

/* ===== NARRATOR ===== */

function playNarrator(){

  speechSynthesis.cancel();

  let suara = new SpeechSynthesisUtterance(text);

  suara.lang = "id-ID";

  suara.rate = 0.9;

  suara.pitch = 1;

  speechSynthesis.speak(suara);

}

/* ===== PLAY STORY ===== */

function mulaiChapter(){

  if(sedangJalan) return;

  sedangJalan = true;

  let music = document.getElementById("bg-music");

  if(music){

    music.volume = 0.03;

    music.play();

  }

  speechSynthesis.cancel();

  document.getElementById("story").innerHTML = "";

  index = 0;

  ketikText();

  setTimeout(() => {

    playNarrator();

  },100);
}

function toggleMenu(){

  document
    .getElementById("sideMenu")
    .classList
    .toggle("active");



}