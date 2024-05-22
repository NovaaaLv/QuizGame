const questions = [
  {
    question: " Berikut ini yang merupakan pengertian hak asasi manusia ....",
    answers: [
      { text: "anugrah Tuhan yang Maha Esa sejak dalam kandungan bersifat universal", correct: true },
      { text: "anugrah Tuhan yang Maha Esa sejak anak anak sampai akhir hayat", correct: false },
      { text: "anugrah Tuhan yang Maha Esa untuk orang orang tertentu saja", correct: false },
      { text: "anugrah Tuhan yang Maha Esa khusus untuk orang orang yang memiliki derajat", correct: false },
      
    ]
  },
  {
    question: " Dibawah ini merupakan macam-macam hak asasi manusia, kecuali ....",
    answers: [
      { text: "hak asasi pribadi", correct: false },
      { text: "hak asasi hukum", correct: false },
      { text: "hak asasi pemerintahan", correct: true },
      { text: "hak asasi sosial budaya", correct: false },
      
    ]
  },
  {
    question: " Setiap warga negara berhak mendapat pendidikan sesuai pasal 31 ayat 1 UUD NRI Tahun 1945. Hal ini sesuai dengan nilai....",
    answers: [
      { text: "nilai dasar", correct: false },
      { text: "nilai instrumental", correct: true },
      { text: "nilai praksis", correct: false },
      { text: "nilai dalam UU", correct: false },
     
    ]
  },
  {
    question: " Berikut ini adalah jenis-jenis kasus pelanggaran HAM yang sifatnya ringan, yaitu ....",
    answers: [
      { text: "penggusuran populasi", correct: false },
      { text: "pelecehan anak", correct: false },
      { text: "pembunuhan seseorang", correct: false },
      { text: "fitnah", correct: true },
     
    ]
  },// Ghiyas Tsaqif
  {
    question: " Pengambilan keputusan menurut demokrasi Pancasila lebih mengutamakan ....",
    answers: [
      { text: "Kehendak pemimpin", correct: false },
      { text: "Voting/suara terbanyak", correct: false },
      { text: "Kepentingan golongan mayoritas", correct: false },
      { text: "Musyawarah untuk mufakat", correct: true },
      
    ]
  },
  {
    question: "Fenita: Kamu harus menentukan sikap. Pilih aku atau dia, sekarang juga! Verri: Beri aku kesempatan sekali lagi…. Fenita: Tidak perlu basa-basi, kalau tidak aku yang memutuskan, titik! Penggalan dialog di atas menunjukkan drama sampai pada bagian ….",
    answers: [
      { text: "pemaparan", correct: false },
      { text: "konflik", correct: true },
      { text: "klimaks", correct: false },
      { text: "resolusi", correct: false },
   
    ]
  },
  {
    question: "Setilawati: Pengecut! Sedikit diserang kritik orang, engkau hendak melarikan diri. Untuk menjaga nama supaya jangan merosot. Aku sudah maklum. Ishak: (Sambil menunjuk keluar) Pergi daripadaku. Engkau boleh memusuhi aku. Untuk cita-cita aku bersedia mengorbankan segalanya juga cintaku. Watak tokoh Ishak dalam penggalan drama di atas adalah ….",
    answers: [
      { text: "pemarah", correct: true },
      { text: "pembual", correct: false },
      { text: "pemberani", correct: false },
      { text: "sombong", correct: false },
      
    ]
  },
  {
    question: "Menentukan jenis kegiatan yang sesuai judul proposal. Contoh: Judul Proposal : Kunjungan ke Daerah Terkena Bencana Alam Jenis Kegiatan: 1. Pasar murah 2. Pengobatan gratis 3. Seminar Tanggap Bencana 4. Lomba memasak nonberas 5. Pelatihan penyelamatan diri Jenis kegiatan yang sesuai dengan judul proposal di atas ditandai dengan nomor ….",
    answers: [
      { text: "(1)", correct: false },
      { text: "(2)", correct: true },
      { text: "(3)", correct: false },
      { text: "(4)", correct: false },
     
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
    question: "Changes in the earth’s atmosphere took place because of the following except…",
    answers: [
      { text: "The changing composition of gasses", correct: false },
      { text: "The development of plant life", correct: false },
      { text: "The earth’s original atmosphere", correct: true },
      { text: "The process of photosynthesis", correct: false },
    ]
  },
  {
    question: "The topic of the passage is…",
    answers: [
      { text: "The static atmosphere", correct: false },
      { text: "The change in the atmosphere", correct: false },
      { text: "The earth’s original atmosphere", correct: true },
      { text: "The process of photosynthesis", correct: false },
    ]
  },
  {
    question: "Judul bacaan tiluhur nyaéta . . .",
    answers: [
      { text: "Raja Pajajaran", correct: false },
      { text: "Prabu Siliwangi", correct: false },
      { text: "Mundinglaya Dikusumah", correct: true },
      { text: "Déwi Patmawati", correct: false }
    ]
  },
  {
    question: "Kusabab sok ngawurukan ngaji, kang Arip sok disebut . . .",
    answers: [
      { text: "Wali", correct: false },
      { text: "Ustadz", correct: true },
      { text: "Kepala SD", correct: false },
      { text: "Nabi", correct: false }
    ]
  },
  {
    question: "Saha Prabu Siliwangi téh . . .",
    answers: [
      { text: "Raja Pajajaran", correct: true },
      { text: "Raja Singosari", correct: false },
      { text: "Raja Muara Beres", correct: false },
      { text: "Raja Kediri", correct: false }
    ]
  },
  {
    question: "Jenenganana garwa Prabu Siliwangi nyaéta . . .",
    answers: [
      { text: "Déwi Padmawati", correct: true },
      { text: "Déwi Sri", correct: false },
      { text: "Déwi Banowati", correct: false },
      { text: "Nyi Gambir Wangi", correct: false }
    ]
  },
  {
    question: "Kacelik ka awan-awan …. ka jona pria. (kecap rundayan anu marenah pikeun ngeusian titik nyaéta)",
    answers: [
      { text: "Kalimpudan", correct: false },
      { text: "Kahieuman", correct: false },
      { text: "Kakoncara", correct: true },
      { text: "Katutupan", correct: false }
    ]
  },
  {
    question: "Buah Semangka disebut buat kendi, sebab . . .",
    answers: [
      { text: "Bauna seungit", correct: false },
      { text: "Sikina bisa dijien kuaci", correct: false },
      { text: "Kandungan caina", correct: true },
      { text: "koneng umyang", correct: false }
    ]
  },
  {
    question: "Pupuh wiringrong diwangun ku . . .",
    answers: [
      { text: "7", correct: false },
      { text: "8", correct: false },
      { text: "6", correct: true },
      { text: "5", correct: false }
    ]
  },
  {
    question: "Mana kalimah nu ieusina nasihat ?",
    answers: [
      { text: "“Cik ujang, Ema pangmeulikeun minyak saléter mah !”", correct: false },
      { text: "“Urang hirup di dunia téh kudu akur jeung batur “", correct: true },
      { text: "“Angga budak akuran ka batur”", correct: false },
      { text: "“Budak éta mah musuhna mani loba”", correct: false }
    ]
  },
  {
    question: "Pupuh dihandap ieu ngabogaan watek",
    text: "Pupuh Wirangrong\nDuh ibu hapunten abdi\nRumaos kadalon-dalon\nDisakola teu junun\nDiajarna bari ulin\nTungtungna kénging wiwirang\nTe nana ujian gagal",
    answers: [
      { text: "Kadalon-dalon", correct: false },
      { text: "Sedih", correct: false },
      { text: "Meunang wiwirang", correct: true },
      { text: "Kaget éling", correct: false }
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
