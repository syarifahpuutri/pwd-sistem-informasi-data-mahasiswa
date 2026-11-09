const db = require('../config/db');

// READ semua
exports.getAll = async () => {
  const [rows] = await db.query('SELECT * FROM mahasiswa ORDER BY id DESC');
  return rows;
};

// READ satu
exports.getById = async (id) => {
  const [rows] = await db.query('SELECT * FROM mahasiswa WHERE id = ?', [id]);
  return rows[0];
};

// CREATE
exports.create = async ({ nim, nama, prodi, angkatan, email, no_hp }) => {
  const [result] = await db.query(
    'INSERT INTO mahasiswa (nim, nama, prodi, angkatan, email, no_hp) VALUES (?, ?, ?, ?, ?, ?)',
    [nim, nama, prodi, angkatan, email, no_hp || null]
  );
  return result.insertId;
};

// UPDATE
exports.update = async (id, { nim, nama, prodi, angkatan, email, no_hp }) => {
  const [result] = await db.query(
    'UPDATE mahasiswa SET nim=?, nama=?, prodi=?, angkatan=?, email=?, no_hp=? WHERE id=?',
    [nim, nama, prodi, angkatan, email, no_hp || null, id]
  );
  return result.affectedRows;
};

// DELETE
exports.remove = async (id) => {
  const [result] = await db.query('DELETE FROM mahasiswa WHERE id = ?', [id]);
  return result.affectedRows;
};
