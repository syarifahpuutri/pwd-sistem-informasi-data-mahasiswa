const Mahasiswa = require('../models/mahasiswaModel');

const WAJIB = ['nim', 'nama', 'prodi', 'angkatan', 'email'];

function validasi(body) {
  const kosong = WAJIB.filter((f) => !body[f] || String(body[f]).trim() === '');
  return kosong.length ? `Field wajib diisi: ${kosong.join(', ')}` : null;
}

function tangani(res, err) {
  if (err.code === 'ER_DUP_ENTRY') {
    return res.status(409).json({ success: false, message: 'NIM sudah terdaftar' });
  }
  console.error(err);
  res.status(500).json({ success: false, message: 'Terjadi kesalahan pada server' });
}

exports.getAll = async (req, res) => {
  try {
    const data = await Mahasiswa.getAll();
    res.json({ success: true, data });
  } catch (err) { tangani(res, err); }
};

exports.getById = async (req, res) => {
  try {
    const data = await Mahasiswa.getById(req.params.id);
    if (!data) return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
    res.json({ success: true, data });
  } catch (err) { tangani(res, err); }
};

exports.create = async (req, res) => {
  const pesan = validasi(req.body);
  if (pesan) return res.status(400).json({ success: false, message: pesan });
  try {
    const id = await Mahasiswa.create(req.body);
    res.status(201).json({ success: true, message: 'Data berhasil ditambahkan', data: { id } });
  } catch (err) { tangani(res, err); }
};

exports.update = async (req, res) => {
  const pesan = validasi(req.body);
  if (pesan) return res.status(400).json({ success: false, message: pesan });
  try {
    const n = await Mahasiswa.update(req.params.id, req.body);
    if (!n) return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
    res.json({ success: true, message: 'Data berhasil diperbarui' });
  } catch (err) { tangani(res, err); }
};

exports.remove = async (req, res) => {
  try {
    const n = await Mahasiswa.remove(req.params.id);
    if (!n) return res.status(404).json({ success: false, message: 'Data tidak ditemukan' });
    res.json({ success: true, message: 'Data berhasil dihapus' });
  } catch (err) { tangani(res, err); }
};
