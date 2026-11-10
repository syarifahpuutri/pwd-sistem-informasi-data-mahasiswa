-- Membuat database
CREATE DATABASE IF NOT EXISTS db_mahasiswa
CHARACTER SET utf8mb4
COLLATE utf8mb4_general_ci;

-- Menggunakan database
USE db_mahasiswa;

-- Menghapus tabel lama jika tersedia
DROP TABLE IF EXISTS mahasiswa;

-- Membuat tabel mahasiswa
CREATE TABLE mahasiswa (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nim VARCHAR(15) NOT NULL,
    nama VARCHAR(100) NOT NULL,
    prodi VARCHAR(60) NOT NULL,
    angkatan YEAR NOT NULL,
    email VARCHAR(100) NOT NULL,
    ipk DECIMAL(3,2) DEFAULT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (id),
    UNIQUE KEY uk_mahasiswa_nim (nim)

) ENGINE=InnoDB;

-- ==================================================
-- DATA AWAL MAHASISWA
-- ==================================================

INSERT INTO mahasiswa
(nim, nama, prodi, angkatan, email, ipk)
VALUES
('H1101251001', 'Shinta Ayuwidati', 'Manajemen Informasi', 2025, 'andi.pratama@student.untan.ac.id', 3.75),

('H1101251002', 'Gendis Setyawan Putri', 'Informatika', 2025, 'siti.aisyah@student.untan.ac.id', 3.80),

('H1101241003', 'Neisya Fadila', 'Informatika', 2024, 'budi.santoso@student.untan.ac.id', 3.65),

('H1101241004', 'Desty Ayuwidati', 'Sistem Informasi', 2024, 'dewi.lestari@student.untan.ac.id', 3.90),

('H1101231005', 'Rizky Maulana', 'Arsitektur', 2023, 'rizky.maulana@student.untan.ac.id', 3.55),

('H1101231006', 'Putri Ramadhani', 'Informatika', 2023, 'putri.ramadhani@student.untan.ac.id', 3.85);
