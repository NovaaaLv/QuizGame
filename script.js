let currentQuestionIndex = 0; // Indeks pertanyaan saat ini
let score = 0; // Skor pemain
let timer; // Menyimpan referensi interval timer
let timeLeft = 120; // Waktu tersisa dalam detik

// Mengambil elemen dari DOM
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const endGameButton = document.getElementById("end-game-button");

startGame(); // Memulai permainan saat halaman dimuat

endGameButton.addEventListener("click", endGame); // Menambahkan event listener ke tombol end game

// Fungsi untuk memulai permainan
function startGame() {
  score = 0; // Mengatur skor ke 0
  timeLeft = 120; // Mengatur waktu tersisa ke 120 detik
  scoreElement.innerText = score; // Menampilkan skor
  timerElement.innerText = `Time: ${timeLeft}`; // Menampilkan waktu tersisa
  currentQuestionIndex = 0; // Mengatur indeks pertanyaan ke 0
  setNextQuestion(); // Menampilkan pertanyaan berikutnya
  startTimer(); // Memulai timer
}

// Fungsi untuk memulai timer
function startTimer() {
  timer = setInterval(() => {
    timeLeft--; // Mengurangi waktu tersisa setiap detik
    timerElement.innerText = `Time: ${timeLeft}`; // Menampilkan waktu tersisa
    if (timeLeft <= 0) { // Jika waktu habis
      clearInterval(timer); // Menghentikan timer
      endGame(); // Mengakhiri permainan
    }
  }, 1000); // Interval 1 detik
}

// Fungsi untuk menampilkan pertanyaan berikutnya
function setNextQuestion() {
  resetState(); // Menghapus tombol jawaban sebelumnya
  showQuestion(shuffle(questions)[currentQuestionIndex]); // Menampilkan pertanyaan acak
}

// Fungsi untuk menampilkan pertanyaan dan jawaban
function showQuestion(question) {
  questionElement.innerText = question.question; // Menampilkan teks pertanyaan
  question.answers.forEach(answer => { // Untuk setiap jawaban
    const button = document.createElement("button"); // Membuat elemen tombol
    button.innerText = answer.text; // Menetapkan teks tombol
    button.classList.add("btn"); // Menambahkan kelas CSS ke tombol
    if (answer.correct) { // Jika jawaban benar
      button.dataset.correct = answer.correct; // Menyimpan informasi jawaban benar pada dataset
    }
    button.addEventListener("click", selectAnswer); // Menambahkan event listener untuk memilih jawaban
    answerButtonsElement.appendChild(button); // Menambahkan tombol ke elemen jawaban
  });
}

// Fungsi untuk menghapus tombol jawaban sebelumnya
function resetState() {
  while (answerButtonsElement.firstChild) { // Selama masih ada anak elemen
    answerButtonsElement.removeChild(answerButtonsElement.firstChild); // Menghapus anak elemen pertama
  }
}

// Fungsi untuk menangani pilihan jawaban
function selectAnswer(e) {
  const selectedButton = e.target; // Mengambil tombol yang diklik
  const correct = selectedButton.dataset.correct === "true"; // Memeriksa apakah jawaban benar

  if (correct) { // Jika jawaban benar
    score += 100; // Menambahkan skor
    Swal.fire({ // Menampilkan pesan benar
      icon: 'success',
      title: 'Correct!',
      text: 'You got it right!'
    });
  } else if (score == 0) { // Jika jawaban salah dan skor 0
    score = 0; // Skor tetap 0
    Swal.fire({ // Menampilkan pesan salah
      icon: 'error',
      title: 'Wrong!',
      text: 'Sorry, that\'s not correct.'
    });
  } else { // Jika jawaban salah dan skor > 0
    score -= 50; // Mengurangi skor
    Swal.fire({ // Menampilkan pesan salah
      icon: 'error',
      title: 'Wrong!',
      text: 'Sorry, that\'s not correct.'
    });
  }

  scoreElement.innerText = score; // Menampilkan skor baru

  currentQuestionIndex++; // Menaikkan indeks pertanyaan
  if (currentQuestionIndex < questions.length) { // Jika masih ada pertanyaan
    setNextQuestion(); // Menampilkan pertanyaan berikutnya
  } else { // Jika tidak ada lagi pertanyaan
    clearInterval(timer); // Menghentikan timer
    Swal.fire({ // Menampilkan pesan kuis selesai
      title: 'Quiz Over!',
      text: 'Your score is ' + score,
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Play Again',
      cancelButtonText: 'Exit'
    }).then((result) => {
      if (result.isConfirmed) { // Jika pemain memilih untuk bermain lagi
        startGame(); // Memulai ulang permainan
      }
    });
  }
}

// Fungsi untuk mengakhiri permainan
function endGame() {
  clearInterval(timer); // Menghentikan timer
  Swal.fire({ // Menampilkan pesan waktu habis atau permainan berakhir
    title: timeLeft <= 0 ? 'Time\'s up!' : 'Game Ended',
    text: 'Your score is ' + score,
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Play Again',
    cancelButtonText: 'Exit'
  }).then((result) => {
    if (result.isConfirmed) { // Jika pemain memilih untuk bermain lagi
      startGame(); // Memulai ulang permainan
    }
  });
}

// Fungsi untuk mengacak array (digunakan untuk mengacak pertanyaan)
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) { // Selama masih ada elemen untuk diacak
    randomIndex = Math.floor(Math.random() * currentIndex); // Memilih indeks acak
    currentIndex -= 1; // Mengurangi indeks saat ini
    temporaryValue = array[currentIndex]; // Menyimpan elemen saat ini
    array[currentIndex] = array[randomIndex]; // Menukar elemen saat ini dengan elemen acak
    array[randomIndex] = temporaryValue; // Menukar elemen acak dengan elemen saat ini
  }
  return array; // Mengembalikan array yang sudah diacak
}