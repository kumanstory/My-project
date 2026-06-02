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

function toggleMenu(){

    document
    .getElementById("sideMenu")
    .classList
    .toggle("active");

}
