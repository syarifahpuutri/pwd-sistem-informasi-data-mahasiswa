const db = require('../config/db');

// READ semua data mahasiswa
exports.getAll = async () => {
  const [rows] = await db.query(
    'SELECT * FROM mahasiswa ORDER BY id DESC'
  );
  return rows;
};

// READ satu data mahasiswa
exports.getById = async (id) => {
  const [rows] = await db.query(
    'SELECT * FROM mahasiswa WHERE id = ?',
    [id]
  );
  return rows[0];
};

// CREATE data mahasiswa
exports.create = async ({
  nim,
  nama,
  prodi,
  angkatan,
  email,
  ipk
}) => {
  const [result] = await db.query(
    `INSERT INTO mahasiswa
    (nim, nama, prodi, angkatan, email, ipk)
    VALUES (?, ?, ?, ?, ?, ?)`,
    [nim, nama, prodi, angkatan, email, ipk]
  );

  return result.insertId;
};

// UPDATE data mahasiswa
exports.update = async (
  id,
  { nim, nama, prodi, angkatan, email, ipk }
) => {
  const [result] = await db.query(
    `UPDATE mahasiswa
    SET nim = ?, nama = ?, prodi = ?,
        angkatan = ?, email = ?, ipk = ?
    WHERE id = ?`,
    [nim, nama, prodi, angkatan, email, ipk, id]
  );

  return result.affectedRows;
};

// DELETE data mahasiswa
exports.remove = async (id) => {
  const [result] = await db.query(
    'DELETE FROM mahasiswa WHERE id = ?',
    [id]
  );

  return result.affectedRows;
};