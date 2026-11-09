require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'API Data Mahasiswa berjalan' }));
app.use('/api/mahasiswa', mahasiswaRoutes);

app.use((req, res) => res.status(404).json({ success: false, message: 'Endpoint tidak ditemukan' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
  try {
    await db.query('SELECT 1');
    console.log('Koneksi MySQL berhasil');
  } catch (err) {
    console.error('Koneksi MySQL GAGAL:', err.message);
  }
});
