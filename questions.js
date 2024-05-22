const questions = [
  {
    question: "Berikut ini yang merupakan pengertian hak asasi manusia ....",
    answers: [
      { text: "anugrah Tuhan yang Maha Esa sejak dalam kandungan bersifat universal", correct: true },
      { text: "anugrah Tuhan yang Maha Esa sejak anak anak sampai akhir hayat", correct: false },
      { text: "anugrah Tuhan yang Maha Esa untuk orang orang tertentu saja", correct: false },
      { text: "anugrah Tuhan yang Maha Esa khusus untuk orang orang yang memiliki derajat", correct: false },
    ]
  },
  {
    question: "Ibukota negara Indonesia adalah ....",
    answers: [
      { text: "Jakarta", correct: true },
      { text: "Surabaya", correct: false },
      { text: "Bandung", correct: false },
      { text: "Yogyakarta", correct: false },
    ]
  },
  {
    question: "Proklamasi kemerdekaan Indonesia dikumandangkan pada tanggal ....",
    answers: [
      { text: "17 Agustus 1945", correct: true },
      { text: "20 Mei 1908", correct: false },
      { text: "1 Juni 1945", correct: false },
      { text: "28 Oktober 1928", correct: false },
    ]
  },
  {
    question: "Dasar negara Indonesia adalah ....",
    answers: [
      { text: "Pancasila", correct: true },
      { text: "Undang-Undang Dasar 1945", correct: false },
      { text: "Sumpah Pemuda", correct: false },
      { text: "Bhineka Tunggal Ika", correct: false },
    ]
  },
  {
    question: "Presiden pertama Republik Indonesia adalah ....",
    answers: [
      { text: "Soekarno", correct: true },
      { text: "Soeharto", correct: false },
      { text: "BJ Habibie", correct: false },
      { text: "Megawati Soekarnoputri", correct: false },
    ]
  },
  {
    question: "Gunung tertinggi di Indonesia adalah ....",
    answers: [
      { text: "Gunung Jaya Wijaya", correct: true },
      { text: "Gunung Rinjani", correct: false },
      { text: "Gunung Semeru", correct: false },
      { text: "Gunung Kerinci", correct: false },
    ]
  },
  {
    question: "Pulau Bali terkenal dengan sebutan Pulau ....",
    answers: [
      { text: "Dewata", correct: true },
      { text: "Seribu Pura", correct: false },
      { text: "Surga", correct: false },
      { text: "Hijau", correct: false },
    ]
  },
  {
    question: "Candi Borobudur terletak di provinsi ....",
    answers: [
      { text: "Jawa Tengah", correct: true },
      { text: "Jawa Timur", correct: false },
      { text: "Jawa Barat", correct: false },
      { text: "Yogyakarta", correct: false },
    ]
  },
  {
    question: "Lagu kebangsaan Indonesia adalah ....",
    answers: [
      { text: "Indonesia Raya", correct: true },
      { text: "Bagimu Negeri", correct: false },
      { text: "Indonesia Pusaka", correct: false },
      { text: "Satu Nusa Satu Bangsa", correct: false },
    ]
  },
  {
    question: "Sungai terpanjang di Indonesia adalah ....",
    answers: [
      { text: "Sungai Kapuas", correct: true },
      { text: "Sungai Mahakam", correct: false },
      { text: "Sungai Barito", correct: false },
      { text: "Sungai Musi", correct: false },
    ]
  },
  {
    question: "Danau terbesar di Indonesia adalah ....",
    answers: [
      { text: "Danau Toba", correct: true },
      { text: "Danau Maninjau", correct: false },
      { text: "Danau Singkarak", correct: false },
      { text: "Danau Sentani", correct: false },
    ]
  },
  {
    question: "Indonesia merdeka dari penjajahan ....",
    answers: [
      { text: "Belanda", correct: true },
      { text: "Jepang", correct: false },
      { text: "Portugis", correct: false },
      { text: "Inggris", correct: false },
    ]
  },
  {
    question: "Pulau terluas di Indonesia adalah ....",
    answers: [
      { text: "Kalimantan", correct: true },
      { text: "Sumatera", correct: false },
      { text: "Papua", correct: false },
      { text: "Sulawesi", correct: false },
    ]
  },
  {
    question: "Kepulauan Raja Ampat terkenal karena ....",
    answers: [
      { text: "Keindahan bawah lautnya", correct: true },
      { text: "Gunung berapinya", correct: false },
      { text: "Candi-candi kuno", correct: false },
      { text: "Hutan hujannya", correct: false },
    ]
  },
  {
    question: "Ibukota provinsi Jawa Timur adalah ....",
    answers: [
      { text: "Surabaya", correct: true },
      { text: "Malang", correct: false },
      { text: "Sidoarjo", correct: false },
      { text: "Kediri", correct: false },
    ]
  },
  {
    question: "Kerajaan Hindu tertua di Indonesia adalah ....",
    answers: [
      { text: "Kutai", correct: true },
      { text: "Majapahit", correct: false },
      { text: "Sriwijaya", correct: false },
      { text: "Mataram", correct: false },
    ]
  },
  {
    question: "Kerajaan Islam pertama di Indonesia adalah ....",
    answers: [
      { text: "Samudera Pasai", correct: true },
      { text: "Demak", correct: false },
      { text: "Majapahit", correct: false },
      { text: "Mataram", correct: false },
    ]
  },
  {
    question: "Tokoh proklamator kemerdekaan Indonesia adalah ....",
    answers: [
      { text: "Soekarno dan Mohammad Hatta", correct: true },
      { text: "Soekarno dan Soeharto", correct: false },
      { text: "Mohammad Hatta dan BJ Habibie", correct: false },
      { text: "Soekarno dan BJ Habibie", correct: false },
    ]
  },
  {
    question: "Perang Diponegoro terjadi pada tahun ....",
    answers: [
      { text: "1825-1830", correct: true },
      { text: "1815-1820", correct: false },
      { text: "1830-1835", correct: false },
      { text: "1840-1845", correct: false },
    ]
  },
  {
    question: "Gamelan adalah alat musik tradisional dari ....",
    answers: [
      { text: "Jawa", correct: true },
      { text: "Sumatera", correct: false },
      { text: "Kalimantan", correct: false },
      { text: "Sulawesi", correct: false },
    ]
  },
  {
    question: "Lukisan terkenal karya Raden Saleh berjudul ....",
    answers: [
      { text: "Penangkapan Pangeran Diponegoro", correct: true },
      { text: "Pertempuran Laut Aru", correct: false },
      { text: "Kapal Terbakar", correct: false },
      { text: "Panen Padi", correct: false },
    ]
  },
  {
    question: "Tari Pendet berasal dari daerah ....",
    answers: [
      { text: "Bali", correct: true },
      { text: "Jawa Barat", correct: false },
      { text: "Sumatera Utara", correct: false },
      { text: "Kalimantan Timur", correct: false },
    ]
  },
  {
    question: "Prambanan adalah nama candi yang berada di provinsi ....",
    answers: [
      { text: "Jawa Tengah", correct: true },
      { text: "Jawa Timur", correct: false },
      { text: "Jawa Barat", correct: false },
      { text: "Yogyakarta", correct: false },
    ]
  },
  {
    question: "Batik adalah warisan budaya dari ....",
    answers: [
      { text: "Indonesia", correct: true },
      { text: "Malaysia", correct: false },
      { text: "Thailand", correct: false },
      { text: "Filipina", correct: false },
    ]
  },
  {
    question: "Puncak tertinggi di Pulau Jawa adalah Gunung ....",
    answers: [
      { text: "Semeru", correct: true },
      { text: "Merapi", correct: false },
      { text: "Slamet", correct: false },
      { text: "Lawu", correct: false },
    ]
  },
  {
    question: "Lagu 'Rayuan Pulau Kelapa' diciptakan oleh ....",
    answers: [
      { text: "Ismail Marzuki", correct: true },
      { text: "WR Supratman", correct: false },
      { text: "C. Simanjuntak", correct: false },
      { text: "Gombloh", correct: false },
    ]
  },
  {
    question: "Senjata tradisional dari Aceh adalah ....",
    answers: [
      { text: "Rencong", correct: true },
      { text: "Keris", correct: false },
      { text: "Mandau", correct: false },
      { text: "Badik", correct: false },
    ]
  },
  {
    question: "Gunung Krakatau terletak di selat ....",
    answers: [
      { text: "Selat Sunda", correct: true },
      { text: "Selat Bali", correct: false },
      { text: "Selat Lombok", correct: false },
      { text: "Selat Makassar", correct: false },
    ]
  },
  {
    question: "Bahasa Indonesia diresmikan sebagai bahasa nasional pada tahun ....",
    answers: [
      { text: "1928", correct: true },
      { text: "1945", correct: false },
      { text: "1965", correct: false },
      { text: "1978", correct: false },
    ]
  },
  {
    question: "Bandara internasional Soekarno-Hatta terletak di kota ....",
    answers: [
      { text: "Tangerang", correct: true },
      { text: "Jakarta", correct: false },
      { text: "Bekasi", correct: false },
      { text: "Depok", correct: false },
    ]
  },
  {
    question: "Hewan komodo hanya ditemukan di pulau ....",
    answers: [
      { text: "Komodo", correct: true },
      { text: "Bali", correct: false },
      { text: "Sumatera", correct: false },
      { text: "Jawa", correct: false },
    ]
  },
  {
    question: "Tari Kecak berasal dari daerah ....",
    answers: [
      { text: "Bali", correct: true },
      { text: "Jawa Tengah", correct: false },
      { text: "Jawa Timur", correct: false },
      { text: "Sumatera Barat", correct: false },
    ]
  },
  {
    question: "Ibukota provinsi Sulawesi Selatan adalah ....",
    answers: [
      { text: "Makassar", correct: true },
      { text: "Manado", correct: false },
      { text: "Palu", correct: false },
      { text: "Kendari", correct: false },
    ]
  },
  {
    question: "Binatang yang menjadi lambang negara Indonesia adalah ....",
    answers: [
      { text: "Garuda", correct: true },
      { text: "Harimau", correct: false },
      { text: "Gajah", correct: false },
      { text: "Komodo", correct: false },
    ]
  },
  {
    question: "Tari Saman berasal dari daerah ....",
    answers: [
      { text: "Aceh", correct: true },
      { text: "Bali", correct: false },
      { text: "Papua", correct: false },
      { text: "Jawa Barat", correct: false },
    ]
  },
  {
    question: "Wayang kulit adalah kesenian tradisional dari daerah ....",
    answers: [
      { text: "Jawa", correct: true },
      { text: "Bali", correct: false },
      { text: "Sumatera", correct: false },
      { text: "Sulawesi", correct: false },
    ]
  },
  {
    question: "Semboyan Bhinneka Tunggal Ika berarti ....",
    answers: [
      { text: "Berbeda-beda tetapi tetap satu", correct: true },
      { text: "Bersatu kita teguh", correct: false },
      { text: "Sekali merdeka tetap merdeka", correct: false },
      { text: "Lebih baik mati daripada dijajah", correct: false },
    ]
  },
  {
    question: "Lambang negara Indonesia adalah ....",
    answers: [
      { text: "Garuda Pancasila", correct: true },
      { text: "Bendera Merah Putih", correct: false },
      { text: "Bhineka Tunggal Ika", correct: false },
      { text: "Burung Cenderawasih", correct: false },
    ]
  },
  {
    question: "Candi Prambanan adalah candi peninggalan agama ....",
    answers: [
      { text: "Hindu", correct: true },
      { text: "Buddha", correct: false },
      { text: "Islam", correct: false },
      { text: "Kristen", correct: false },
    ]
  },
  {
    question: "Pahlawan nasional yang terkenal dengan sebutan 'Bung Tomo' berasal dari kota ....",
    answers: [
      { text: "Surabaya", correct: true },
      { text: "Jakarta", correct: false },
      { text: "Bandung", correct: false },
      { text: "Medan", correct: false },
    ]
  },
  {
    question: "Makanan tradisional dari Padang yang terkenal adalah ....",
    answers: [
      { text: "Rendang", correct: true },
      { text: "Gudeg", correct: false },
      { text: "Pempek", correct: false },
      { text: "Sate Lilit", correct: false },
    ]
  },
  {
    question: "Tari Jaipong berasal dari daerah ....",
    answers: [
      { text: "Jawa Barat", correct: true },
      { text: "Jawa Tengah", correct: false },
      { text: "Sumatera Utara", correct: false },
      { text: "Kalimantan Timur", correct: false },
    ]
  },
  {
    question: "Ibukota negara Jepang adalah ....",
    answers: [
      { text: "Tokyo", correct: true },
      { text: "Osaka", correct: false },
      { text: "Nagoya", correct: false },
      { text: "Kyoto", correct: false },
    ]
  },
  {
    question: "Nama resmi negara Thailand adalah ....",
    answers: [
      { text: "Kerajaan Thailand", correct: true },
      { text: "Republik Thailand", correct: false },
      { text: "Negara Thai", correct: false },
      { text: "Federasi Thai", correct: false },
    ]
  },
  {
    question: "Ibukota negara Australia adalah ....",
    answers: [
      { text: "Canberra", correct: true },
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Perth", correct: false },
    ]
  },
  {
    question: "Penemu benua Amerika adalah ....",
    answers: [
      { text: "Christopher Columbus", correct: true },
      { text: "Vasco da Gama", correct: false },
      { text: "Marco Polo", correct: false },
      { text: "Ferdinand Magellan", correct: false },
    ]
  },
  {
    question: "Negara dengan jumlah penduduk terbanyak di dunia adalah ....",
    answers: [
      { text: "Cina", correct: true },
      { text: "India", correct: false },
      { text: "Amerika Serikat", correct: false },
      { text: "Indonesia", correct: false },
    ]
  },
];
