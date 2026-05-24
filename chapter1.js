const text = `Leon berasal dari keluarga sederhana. Sejak ayahnya meninggal beberapa tahun lalu, hanya ibunya yang menjadi tulang punggung keluarga. Setiap pagi, sebelum matahari benar-benar terbit, ibunya sudah berangkat ke kios sayur miliknya di pasar.

Leon terbiasa mengurus dirinya sendiri — menyiapkan seragam, sarapan, bahkan terkadang mencuci piring bekas makan pagi sebelum berangkat sekolah. Ia jarang mengeluh; sepi sudah menjadi bagian dari hidupnya.

Motor tua peninggalan ayahnya menjadi satu-satunya teman perjalanan setiap pagi. Suaranya kasar, sering mogok di tengah jalan, tapi Leon tetap setia menyalakannya lagi dan lagi. Ada kenangan tersendiri di balik bunyi mesinnya — seolah motor itu menyimpan suara masa lalu yang tak pernah hilang.

Hari ini, langit tampak cerah. Tahun ajaran baru dimulai, dan Leon resmi naik ke kelas tiga SMA. Tahun terakhirnya. Ia tak menyangka, di tahun inilah hidupnya akan berubah — saat ia dipindahkan ke kelas A, dan pertama kali bertemu Fitri.
`;

let index = 0;
let typing = false;
function mulaiChapter(){

  if(typing) return;

  typing = true;

  const audio = document.getElementById("narrator");

  const story = document.getElementById("story");

  audio.pause();

  audio.currentTime = 0;

  audio.play();

  story.innerHTML = "";

  index = 0;

  ketikText();

}

function ketikText(){

  const story = document.getElementById("story");

  if(index < text.length){

    story.innerHTML += text.charAt(index);

    index++;

    story.scrollTop = story.scrollHeight;

    setTimeout(ketikText, 75);

  }

}