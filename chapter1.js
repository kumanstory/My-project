const text = `Leon berasal dari keluarga sederhana. Sejak ayahnya meninggal beberapa tahun lalu, hanya ibunya yang menjadi tulang punggung keluarga. Setiap pagi, sebelum matahari benar-benar terbit, ibunya sudah berangkat ke kios sayur miliknya di pasar.

Leon terbiasa mengurus dirinya sendiri — menyiapkan seragam, sarapan, bahkan terkadang mencuci piring bekas makan pagi sebelum berangkat sekolah. Ia jarang mengeluh; sepi sudah menjadi bagian dari hidupnya.

Motor tua peninggalan ayahnya menjadi satu-satunya teman perjalanan setiap pagi. Suaranya kasar, sering mogok di tengah jalan, tapi Leon tetap setia menyalakannya lagi dan lagi. Ada kenangan tersendiri di balik bunyi mesinnya — seolah motor itu menyimpan suara masa lalu yang tak pernah hilang.

Hari ini, langit tampak cerah. Tahun ajaran baru dimulai, dan Leon resmi naik ke kelas tiga SMA. Tahun terakhirnya. Ia tak menyangka, di tahun inilah hidupnya akan berubah — saat ia dipindahkan ke kelas A, dan pertama kali bertemu Fitri.

Suara langkah kaki siswa bergema di lorong sekolah. Hari pertama selalu penuh kebisingan—tertawa, bercanda, dan panggilan nama-nama yang sudah lama tak terdengar selama liburan. Leon berjalan pelan sambil membawa buku-buku barunya, mencoba mencari kelas yang tertera di jadwal: Xll-A.

Begitu memasuki ruangan, pandangannya menyapu setiap bangku. Hampir semuanya sudah terisi. Ia memilih tempat di dekat jendela, tempat favoritnya sejak dulu—di mana ia bisa melihat langit saat bosan dan menyembunyikan diri dari keramaian.

Beberapa menit kemudian, seorang gadis masuk tergesa-gesa. Rambutnya dikuncir sederhana, wajahnya sedikit basah oleh keringat pagi.
“Maaf, boleh duduk di sini?” tanyanya sambil menunjuk kursi di sebelah Leon.
Leon hanya mengangguk pelan.

Gadis itu tersenyum, lalu duduk.
“Namaku Fitri,” katanya ramah.
“Leon,” jawabnya singkat.

  Sejak saat itu, hari-hari Leon mulai berbeda. Fitri selalu menjadi yang pertama menyapa setiap pagi, kadang meminjam pulpen, kadang hanya sekadar bertanya, “Kamu sudah sarapan belum?”
Hal-hal kecil yang sederhana, tapi bagi Leon—itu adalah perhatian yang jarang ia dapatkan.

Mereka sering mengerjakan tugas bersama, berdiskusi tentang pelajaran, dan sesekali bercanda ringan. Leon tak banyak bicara, tapi Fitri tampaknya mengerti caranya membuat keheningan terasa nyaman.

Di antara lembaran buku dan suara bel sekolah, perlahan sesuatu tumbuh di hati Leon—rasa yang tak berani ia sebut cinta, tapi cukup untuk membuatnya menatap Fitri sedikit lebih lama setiap hari.

  Hari-hari berlalu dengan cepat. Waktu seperti berlari tanpa menunggu siapa pun, termasuk Leon.
Fitri semakin sering berada di dekatnya. Mereka duduk bersebelahan di kelas, belajar kelompok, bahkan sesekali pulang bersama jika arah mereka sama.

Namun, semakin lama Leon mengenal Fitri, semakin besar pula rasa takut di hatinya.
Takut kalau semua yang ia rasakan hanya akan merusak kenyamanan yang sudah ada.
Ia memilih diam—menyimpan rasa itu dalam senyum, dalam tatapan, dalam caranya memperhatikan dari jauh.

Pernah suatu kali, Fitri bercerita dengan semangat tentang seseorang yang ia kagumi dari kelas lain.
Leon hanya tersenyum, meski dadanya terasa sesak.
Malam itu, ia menatap bintang dari jendela kamarnya, bertanya-tanya apakah perasaan yang tak pernah diungkapkan bisa sampai, meski tanpa kata.

Hari-hari menjelang kelulusan tiba. Foto kenangan, tanda tangan di seragam, dan tawa penuh nostalgia memenuhi udara sekolah.
Di antara keramaian itu, Leon sempat menatap Fitri lama—seolah ingin menahan waktu.
Namun lagi-lagi, bibirnya kelu.

Fitri menoleh dan tersenyum, “Terima kasih ya, Leon. Selama ini kamu teman yang baik.”
Kata teman itu terasa seperti jarak yang tak bisa dilangkahi.
Leon membalas dengan senyum kecil, lalu hanya menjawab pelan, “Iya, Fit.”

Itulah hari terakhir mereka berbicara. Setelah kelulusan, Fitri pindah ke luar kota untuk melanjutkan kuliah.
Leon hanya bisa melihat kepergiannya dari jauh, membawa serta semua kata yang tak sempat diucapkannya.


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