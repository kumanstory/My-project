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

let text = `Leon berasal dari keluarga sederhana. Sejak ayahnya meninggal beberapa tahun lalu, hanya ibunya yang menjadi tulang punggung keluarga. Setiap pagi, sebelum matahari benar-benar terbit, ibunya sudah berangkat ke kios sayur miliknya di pasar.

Leon terbiasa mengurus dirinya sendiri — menyiapkan seragam, sarapan, bahkan terkadang mencuci piring bekas makan pagi sebelum berangkat sekolah. Ia jarang mengeluh; sepi sudah menjadi bagian dari hidupnya.

Motor tua peninggalan ayahnya menjadi satu-satunya teman perjalanan setiap pagi. Suaranya kasar, sering mogok di tengah jalan, tapi Leon tetap setia menyalakannya lagi dan lagi. Ada kenangan tersendiri di balik bunyi mesinnya — seolah motor itu menyimpan suara masa lalu yang tak pernah hilang.

Hari ini, langit tampak cerah. Tahun ajaran baru dimulai, dan Leon resmi naik ke kelas tiga SMA. Tahun terakhirnya. Ia tak menyangka, di tahun inilah hidupnya akan berubah — saat ia dipindahkan ke kelas A, dan pertama kali bertemu Fitri.
`;


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

  suara.rate = 0⁸.9;

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
