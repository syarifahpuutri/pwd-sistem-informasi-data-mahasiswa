-- Database kelompok 3 - Studi kasus: Data Mahasiswa
CREATE DATABASE IF NOT EXISTS db_mahasiswa CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE db_mahasiswa;

DROP TABLE IF EXISTS mahasiswa;
CREATE TABLE mahasiswa (
  id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nim         VARCHAR(15)  NOT NULL,
  nama        VARCHAR(100) NOT NULL,
  prodi       VARCHAR(60)  NOT NULL,
  angkatan    YEAR         NOT NULL,
  email       VARCHAR(100) NOT NULL,
  no_hp       VARCHAR(20)  DEFAULT NULL,
  created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uk_mahasiswa_nim (nim)
) ENGINE=InnoDB;

INSERT INTO mahasiswa (nim, nama, prodi, angkatan, email, no_hp) VALUES
('H1101251001', 'Andi Pratama',      'Informatika', 2025, 'andi.pratama@student.untan.ac.id',  '081250010001'),
('H1101251002', 'Siti Aisyah',       'Informatika', 2025, 'siti.aisyah@student.untan.ac.id',   '081250010002'),
('H1101241003', 'Budi Santoso',      'Informatika', 2024, 'budi.santoso@student.untan.ac.id',  '081250010003'),
('H1101241004', 'Dewi Lestari',      'Informatika', 2024, 'dewi.lestari@student.untan.ac.id',  '081250010004'),
('H1101231005', 'Rizky Maulana',     'Informatika', 2023, 'rizky.maulana@student.untan.ac.id', '081250010005'),
('H1101231006', 'Putri Ramadhani',   'Informatika', 2023, 'putri.ramadhani@student.untan.ac.id','081250010006');
