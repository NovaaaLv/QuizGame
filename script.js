let currentQuestionIndex = 0; // Indeks pertanyaan saat ini
let score = 0; // Skor pemain
let timer; // Menyimpan referensi interval timer
let timeLeft = 120; // Waktu tersisa dalam detik
let consecutiveCorrectAnswers = 0; // Menyimpan jumlah jawaban benar berturut-turut
let scoreMultiplier = 1; // Pengali skor default
let gameOver = true; // Menyimpan status permainan

// Mengambil elemen dari DOM
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");
const endGameButton = document.getElementById("end-game-button");
const questionCountElement = document.getElementById("question-count");
const consecutiveCorrectElement = document.getElementById("consecutive-correct"); // Menambahkan elemen baru
const attachmentContainer = document.getElementById("atc-container");
const gameContainer = document.getElementById('game-container');
const atcContainer1 = document.getElementById('atc-con1');
const atcContainer2 = document.getElementById('atc-con2');

startGame(); // Memulai permainan saat halaman dimuat

endGameButton.addEventListener("click", endGame); // Menambahkan event listener ke tombol end game

// Fungsi untuk memulai permainan
function startGame() {
  score = 0; // Mengatur skor ke 0
  timeLeft = 120; // Mengatur waktu tersisa ke 120 detik
  consecutiveCorrectAnswers = 0; // Mengatur jumlah jawaban benar berturut-turut ke 0
  scoreMultiplier = 1; // Reset pengali skor
  gameOver = false; // Reset status permainan
  scoreElement.innerText = score; // Menampilkan skor
  timerElement.innerText = `Time: {timeLeft}`; // Menampilkan waktu tersisa
  questionCountElement.innerText = `Question: {currentQuestionIndex + 1}`; // Menampilkan jumlah soal yang sudah dikerjakan
  consecutiveCorrectElement.innerText = `STRIKE: {consecutiveCorrectAnswers}`; // Menampilkan jumlah jawaban benar berturut-turut
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

// Fungsi untuk menampilkan pertanyaan berikut
function setNextQuestion() {
  resetState(); // Menghapus tombol jawaban sebelumnya
  showQuestion(shuffle(questions)[currentQuestionIndex]); // Menampilkan pertanyaan acak
  questionCountElement.innerText = `Question: ${currentQuestionIndex + 1}`; // Menampilkan jumlah soal yang sudah dikerjakan
}

// Fungsi untuk menampilkan pertanyaan dan jawaban
function showQuestion(question) {
  const colors = ["btn-1", "btn-2", "btn-3", "btn-4"];
  questionElement.innerText = question.question; // Menampilkan teks pertanyaan

  // Mengacak urutan jawaban sebelum menampilkannya
  const shuffledAnswers = shuffle(question.answers);

  shuffledAnswers.forEach((answer, index) => { // Untuk setiap jawaban
    const button = document.createElement("button"); // Membuat elemen tombol
    button.innerText = answer.text; // Menetapkan teks tombol
    button.classList.add("btn"); // Menambahkan kelas CSS ke tombol
    button.classList.add(colors[index % colors.length]); // Menambahkan kelas warna yang sesuai

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
  if (gameOver) return; // Jika permainan sudah berakhir, tidak melakukan apapun

  const selectedButton = e.target; // Mengambil tombol yang diklik
  const correct = selectedButton.dataset.correct === "true"; // Memeriksa apakah jawaban benar

  if (correct) { // Jika jawaban benar
    score += 100 * scoreMultiplier; // Menambahkan skor dengan pengali
    consecutiveCorrectAnswers++; // Menambahkan jumlah jawaban benar berturut-turut
    Swal.fire({ // Menampilkan pesan benar
      icon: 'success',
      title: 'Correct!',
      text: `You got it right! Consecutive correct answers: ${consecutiveCorrectAnswers}`,
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    consecutiveCorrectAnswers = 0; // Mengatur ulang jumlah jawaban benar berturut-turut
    if (score > 0) {
      score -= 50; // Mengurangi skor jika lebih dari 0
    }
    Swal.fire({ // Menampilkan pesan salah
      icon: 'error',
      title: 'Wrong!',
      text: 'Sorry, that\'s not correct.',
      showConfirmButton: false,
      timer: 1500
    });
  }

  scoreElement.innerText = score; // Menampilkan skor baru
  consecutiveCorrectElement.innerText = `STRIKE: ${consecutiveCorrectAnswers}`; // Menampilkan jumlah jawaban benar berturut-turut

  currentQuestionIndex++; // Menaikkan indeks pertanyaan

  // Cek jika indeks pertanyaan adalah kelipatan 5
  if (currentQuestionIndex % 5 === 0) {
    showAttachmentOptions(); // Menampilkan pilihan lampiran
  } else {
    scoreMultiplier = 1; // Reset pengali skor ke 1 jika bukan kelipatan 5
  }

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
    }).then((result) => {
      gameOver = true; // Mengatur status permainan menjadi selesai
      if (result.isConfirmed) { // Jika pemain memilih untuk bermain lagi
        startGame(); // Memulai ulang permainan
      }
      else if (result.dismiss === Swal.DismissReason.cancel) { // Jika pemain memilih untuk keluar
        window.location.href = 'menu.html'; // Alihkan ke halaman menu.html
      }
    });
  }
}


for (let error = 0; error < array.length; error++) {
  const element = array[error];
  console.log(error + "ini  adalah buk ahahahahaha")
}
// Fungsi untuk menampilkan pilihan lampiran
function showAttachmentOptions() {
  Swal.fire({
    icon: 'info',
    title: 'Choose Your Power Up!',
    text: 'The next question will have Power Up',
    showConfirmButton: false,
    timer: 2000
  });
  atcContainer1.classList.remove('active')
  atcContainer2.classList.remove('active')
  attachmentContainer.classList.remove('none');
  gameContainer.classList.add('none');
}

async function ApplyAttachmentScore() {
  // Tambahkan kelas 'active' untuk memulai animasi
  atcContainer1.classList.add('active');

  // Tunggu animasi selesai (sesuai dengan durasi animasi di CSS)
  await new Promise(resolve => setTimeout(resolve, 2000)); // Pastikan durasi sesuai dengan CSS

  // Lakukan tindakan setelah animasi selesai
  scoreMultiplier = 2;
  Swal.fire({
    icon: 'info',
    title: 'Score Multiplier Activated!',
    text: 'The next question will have double points!',
    showConfirmButton: false,
    timer: 2000
  });
  attachmentContainer.classList.add('none');
  gameContainer.classList.remove('none');
}

async function ApplyAttachmentTime() {
  // Tambahkan kelas 'active' untuk memulai animasi
  atcContainer2.classList.add('active');

  // Tunggu animasi selesai (sesuai dengan durasi animasi di CSS)
  await new Promise(resolve => setTimeout(resolve, 2000)); // Pastikan durasi sesuai dengan CSS

  // Lakukan tindakan setelah animasi selesai
  timeLeft += 30;
  timerElement.innerText = `Time: ${timeLeft}`;
  Swal.fire({
    icon: 'info',
    title: 'Time Extension Activated!',
    text: '30 seconds have been added to the timer!',
    showConfirmButton: false,
    timer: 2000
  });
  attachmentContainer.classList.add('none');
  gameContainer.classList.remove('none');
}

function saveScore(score) {
  const scoreData = { score: score }; // Membuat objek data skor

  fetch('http://localhost:3000/save-score', { // Pastikan URL sesuai dengan server yang berjalan
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(scoreData)
  })
    .then(response => response.text())
    .then(data => {
      Swal.fire({
        title: 'Score Saved Successfully!',
        text: `Your score of ${score} has been saved.`,
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        window.location.href = 'menu.html'; // Alihkan ke halaman menu.html setelah menyimpan skor
      });
    })
    .catch(error => {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error!',
        text: 'There was an error saving your score. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
}



// Panggil saveScore ketika permainan selesai atau skor diperbarui
function endGame() {
  gameOver = true;
  clearInterval(timer);
  saveScore(score); // Simpan skor saat permainan selesai
}

// Fungsi untuk mengacak array (digunakan untuk mengacak pertanyaan dan jawaban)
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
