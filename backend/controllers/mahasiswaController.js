const Mahasiswa = require('../models/mahasiswaModel');

// Field yang wajib diisi
const WAJIB = [
  'nim',
  'nama',
  'prodi',
  'angkatan',
  'email',
  'ipk'
];

// Validasi data mahasiswa
function validasi(body) {
  const kosong = WAJIB.filter(
    (field) =>
      body[field] === undefined ||
      body[field] === null ||
      String(body[field]).trim() === ''
  );

  if (kosong.length) {
    return `Field wajib diisi: ${kosong.join(', ')}`;
  }

  const ipk = Number(body.ipk);

  if (!Number.isFinite(ipk) || ipk < 0 || ipk > 4) {
    return 'IPK harus berupa angka antara 0.00 sampai 4.00';
  }

  return null;
}

// Menangani error
function tangani(res, err) {
  if (err.code === 'ER_DUP_ENTRY') {
    return res.status(409).json({
      success: false,
      message: 'NIM sudah terdaftar'
    });
  }

  console.error(err);

  return res.status(500).json({
    success: false,
    message: 'Terjadi kesalahan pada server'
  });
}

// READ semua mahasiswa
exports.getAll = async (req, res) => {
  try {
    const data = await Mahasiswa.getAll();

    res.json({
      success: true,
      data
    });
  } catch (err) {
    tangani(res, err);
  }
};

// READ satu mahasiswa
exports.getById = async (req, res) => {
  try {
    const data = await Mahasiswa.getById(req.params.id);

    if (!data) {
      return res.status(404).json({
        success: false,
        message: 'Data tidak ditemukan'
      });
    }

    res.json({
      success: true,
      data
    });
  } catch (err) {
    tangani(res, err);
  }
};

// CREATE mahasiswa
exports.create = async (req, res) => {
  const pesan = validasi(req.body);

  if (pesan) {
    return res.status(400).json({
      success: false,
      message: pesan
    });
  }

  try {
    const id = await Mahasiswa.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Data berhasil ditambahkan',
      data: { id }
    });
  } catch (err) {
    tangani(res, err);
  }
};

// UPDATE mahasiswa
exports.update = async (req, res) => {
  const pesan = validasi(req.body);

  if (pesan) {
    return res.status(400).json({
      success: false,
      message: pesan
    });
  }

  try {
    const n = await Mahasiswa.update(
      req.params.id,
      req.body
    );

    if (!n) {
      return res.status(404).json({
        success: false,
        message: 'Data tidak ditemukan'
      });
    }

    res.json({
      success: true,
      message: 'Data berhasil diperbarui'
    });
  } catch (err) {
    tangani(res, err);
  }
};

// DELETE mahasiswa
exports.remove = async (req, res) => {
  try {
    const n = await Mahasiswa.remove(req.params.id);

    if (!n) {
      return res.status(404).json({
        success: false,
        message: 'Data tidak ditemukan'
      });
    }

    res.json({
      success: true,
      message: 'Data berhasil dihapus'
    });
  } catch (err) {
    tangani(res, err);
  }
};