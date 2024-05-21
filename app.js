const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db'); // impor koneksi database
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Middleware untuk parsing JSON
app.use(cors({
  origin: 'http://127.0.0.1:5500', // Atau '*' untuk memperbolehkan akses dari semua asal
}));


// Endpoint untuk menyimpan skor
app.post('/save-score', (req, res) => {
  const { score } = req.body;
  if (typeof score === 'number') {
    const query = 'INSERT INTO quiz (score) VALUES (?)';
    db.query(query, [score], (err, result) => {
      if (err) {
        console.error('Error saving score:', err);
        res.status(500).send('Error saving score');
      } else {
        console.log('Score saved successfully!', result); // Log ini akan menunjukkan bahwa query berhasil
        res.send('Score saved successfully!');
      }
    });
  } else {
    res.status(400).send('Invalid score');
  }
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
