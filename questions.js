const questions = [
  {
    question: "1. Berikut ini yang merupakan pengertian hak asasi manusia ....",
    answers: [
      { text: "anugrah Tuhan yang Maha Esa sejak dalam kandungan bersifat universal", correct: true },
      { text: "anugrah Tuhan yang Maha Esa sejak anak anak sampai akhir hayat", correct: false },
      { text: "anugrah Tuhan yang Maha Esa untuk orang orang tertentu saja", correct: false },
      { text: "anugrah Tuhan yang Maha Esa khusus untuk orang orang yang memiliki derajat", correct: false },
      { text: "anugrah Tuhan yang Maha Esa hanya untuk manusia saja", correct: false }
    ]
  },
  {
    question: "2. Dibawah ini merupakan macam-macam hak asasi manusia, kecuali ....",
    answers: [
      { text: "hak asasi pribadi", correct: false },
      { text: "hak asasi hukum", correct: false },
      { text: "hak asasi pemerintahan", correct: true },
      { text: "hak asasi sosial budaya", correct: false },
      { text: "hak asasi tata cara peradilan dan perlindungan", correct: false }
    ]
  },
  {
    question: "3. Setiap warga negara berhak mendapat pendidikan sesuai pasal 31 ayat 1 UUD NRI Tahun 1945. Hal ini sesuai dengan nilai....",
    answers: [
      { text: "nilai dasar", correct: false },
      { text: "nilai instrumental", correct: true },
      { text: "nilai praksis", correct: false },
      { text: "nilai dalam UU", correct: false },
      { text: "nilai dalam UUD Tahun 1945", correct: false }
    ]
  },
  {
    question: "4. Berikut ini adalah jenis-jenis kasus pelanggaran HAM yang sifatnya ringan, yaitu ....",
    answers: [
      { text: "penggusuran populasi", correct: false },
      { text: "pelecehan anak", correct: false },
      { text: "pembunuhan seseorang", correct: false },
      { text: "fitnah", correct: true },
      { text: "pembunuhan massal", correct: false }
    ]
  },
  {
    question: "5. Pengambilan keputusan menurut demokrasi Pancasila lebih mengutamakan ....",
    answers: [
      { text: "Kehendak pemimpin", correct: false },
      { text: "Voting/suara terbanyak", correct: false },
      { text: "Kepentingan golongan mayoritas", correct: false },
      { text: "Musyawarah untuk mufakat", correct: true },
      { text: "Berkembangnya budaya", correct: false }
    ]
  },
  {
    question: "HTML Merupakan singkatan dari",
    answers: [
      { text: "Hyper Link Markup Language", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hyper Tool Markup Language", correct: false },
      { text: "Hyper Test Markup Language", correct: false }
    ]
  },
  {
    question: "Atribut alt pada tag <img> berfungsi untuk?",
    answers: [
      { text: "Menampilkan alternatif teks ketika gambar tidak bisa ditampilkan", correct: true },
      { text: "Membuat gambar dengan animasi", correct: false },
      { text: "Mengatur ukuran gambar", correct: false},
      { text: "Mengatur jarak gambar dengan elemen lain", correct: false }
    ]
  },
  {
    question: "Elemen HTML untuk memutar video adalah",
    answers: [
      { text: "<video>", correct: true },
      { text: "<input type='video'>", correct: false },
      { text: "<media>", correct: false },
      { text: "<canvas>", correct: false }
    ]
  },
  {
    question: "Elemen HTML untuk memutar suara adalah",
    answers: [
      { text: "<audio>", correct: true },
      { text: "<sound>", correct: false },
      { text: "<video>", correct: false },
      { text: "<mp3>", correct: false }
    ]
  },
  {
    question: "Atribut yang digunakan pada field untuk membuat aturan field tersebut harus diisi adalah atribut",
    answers: [
      { text: "validate", correct: false },
      { text: "required", correct: true },
      { text: "name", correct: false },
      { text: "value", correct: false }
    ]
  },
  {
    question: "Untuk membuat paragraf menggunakan tag?",
    answers: [
      { text: "<p>", correct: true },
      { text: "<paragraf>", correct: false },
      { text: "<i>", correct: false },
      { text: "<italic>", correct: false }
    ]
  },
  {
    question: "Fenita: Kamu harus menentukan sikap. Pilih aku atau dia, sekarang juga! Verri: Beri aku kesempatan sekali lagi…. Fenita: Tidak perlu basa-basi, kalau tidak aku yang memutuskan, titik! Penggalan dialog di atas menunjukkan drama sampai pada bagian ….",
    answers: [
      { text: "pemaparan", correct: false },
      { text: "konflik", correct: true },
      { text: "klimaks", correct: false },
      { text: "resolusi", correct: false },
      { text: "penyelesaian", correct: false }
    ]
  },
  {
    question: "Setilawati: Pengecut! Sedikit diserang kritik orang, engkau hendak melarikan diri. Untuk menjaga nama supaya jangan merosot. Aku sudah maklum. Ishak: (Sambil menunjuk keluar) Pergi daripadaku. Engkau boleh memusuhi aku. Untuk cita-cita aku bersedia mengorbankan segalanya juga cintaku. Watak tokoh Ishak dalam penggalan drama di atas adalah ….",
    answers: [
      { text: "pemarah", correct: true },
      { text: "pembual", correct: false },
      { text: "pemberani", correct: false },
      { text: "sombong", correct: false },
      { text: "tidak bertanggung jawab", correct: false }
    ]
  },
  {
    question: "Menentukan jenis kegiatan yang sesuai judul proposal. Contoh: Judul Proposal : Kunjungan ke Daerah Terkena Bencana Alam Jenis Kegiatan: 1. Pasar murah 2. Pengobatan gratis 3. Seminar Tanggap Bencana 4. Lomba memasak nonberas 5. Pelatihan penyelamatan diri Jenis kegiatan yang sesuai dengan judul proposal di atas ditandai dengan nomor ….",
    answers: [
      { text: "(1)", correct: false },
      { text: "(2)", correct: true },
      { text: "(3)", correct: false },
      { text: "(4)", correct: false },
      { text: "(5)", correct: false }
    ]
  },
  {
    question: "Menentukan sistematika penulisan proposal. Contoh: (1) Tujuan (2) Jenis Kegiatan (3) Latar belakang (4) Landasan Kegiatan (5) Penutup (6) Anggaran Biaya Sistematika penulisan proposal kegiatan yang tepat ditandai dengan nomor ….",
    answers: [
      { text: "(1), (3), (4), (2), (6), dan (5)", correct: false },
      { text: "(3), (1), (4), (2), (6), dan (5)", correct: true },
      { text: "(4), (2), (1), (6), (3), dan (5)", correct: false },
      { text: "(4), (3), (2), (1), (6), dan (5)", correct: false }
    ]
  },
  {
    question: "Berikut ini yang bukan merupakan kegiatan dalam meresensi buku ialah ….",
    answers: [
      { text: "Menimbang isi", correct: false },
      { text: "Merujuk", correct: false },
      { text: "Membahas", correct: false },
      { text: "Mengkritik", correct: false },
      { text: "Mengungkapkan Kembali", correct: true }
    ]
  },
  {
    question: "Tujuan utama latihan kebugaran jasmani adalah ....",
    answers: [
      { text: "Meningkatkan fleksibilitas", correct: false },
      { text: "Meningkatkan kecepatan", correct: false },
      { text: "Membentuk postur tubuh", correct: false },
      { text: "Meningkatkan kebugaran jasmani", correct: true }
    ]
  },
  {
    question: "Gerakan yang dominan dilakukan dalam permainan sepak bola adalah . . . .",
    answers: [
      { text: "Menendang bola", correct: false },
      { text: "Menahan bola", correct: false },
      { text: "Menggiring bola", correct: true },
      { text: "Menyundul bola", correct: false }
    ]
  },
  {
    question: "Dalam permainan bola voli, gerakan kedua kaki terbuka, lutut ditekuk, kedua lengan lurus dijulurkan ke depan bawah dan tangan satu sama lain dikaitkan atau berpegangan, ini merupakan gerakan ……",
    answers: [
      { text: "Servis", correct: false },
      { text: "Passing Bawah", correct: true },
      { text: "Smash", correct: false },
      { text: "Passing Atas", correct: false }
    ]
  },
  {
    question: "Melakukan teknik dasar gerakan dengan berporos pada satu kaki atau PIVOT dalam permainan bola basket dengan tujuan...",
    answers: [
      { text: "Mendekatkan bola ke keranjang lawan", correct: false },
      { text: "Melindungi bola dari sergapan lawan", correct: false },
      { text: "Menghindari serangan lawan", correct: true },
      { text: "Memperagakan teknik bertahan", correct: false }
    ]
  },
  {
    question: "Pemain bola basket mempunyai tugas pertahanan khusus menjaga satu orang menjaga lawan satu orang adalah ciri sistem pertahanan …",
    answers: [
      { text: "Man to Man Marking", correct: true },
      { text: "Defence", correct: false },
      { text: "Zone Defence", correct: false },
      { text: "Offense", correct: false }
    ]
  }
];
