let index = 0;
let pause = true;
let sedangMengetik = false;

/* =========================
   TYPEWRITER
========================= */

function ketikText(){

  if(pause){
    sedangMengetik = false;
    return;
  }

  sedangMengetik = true;

  const story = document.getElementById("story");
  const box = document.querySelector(".chapter-story-box");

  if(index < storyText.length){

    story.innerHTML += storyText.charAt(index);

    index++;

    // auto scroll
    box.scrollTop = box.scrollHeight;

    setTimeout(ketikText,80);

  } else {

    sedangMengetik = false;

  }

}

/* =========================
   PLAY
========================= */

function mulaiChapter(){

  pause = false;

  // jangan panggil lagi kalau masih jalan
  if(!sedangMengetik){
    ketikText();
  }

  document.getElementById("narrator").play();

}

/* =========================
   PAUSE
========================= */

function pauseChapter(){

  pause = true;

  document.getElementById("narrator").pause();

}
