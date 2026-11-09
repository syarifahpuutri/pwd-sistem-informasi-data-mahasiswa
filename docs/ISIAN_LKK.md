# Bahan Isian LKK - Kelompok 3 (Data Mahasiswa)

## 1. Identitas
- Nama Entitas / Tabel : `mahasiswa`

## 3. Rancangan Database
Nama Database: `db_mahasiswa` | Nama Tabel: `mahasiswa`

| NO | Nama Field | Tipe Data    | Constraint                  | Contoh Nilai                      |
|----|------------|--------------|-----------------------------|-----------------------------------|
| 1  | id         | INT UNSIGNED | PRIMARY KEY, AUTO_INCREMENT | 1                                 |
| 2  | nim        | VARCHAR(15)  | NOT NULL, UNIQUE            | H1101251001                       |
| 3  | nama       | VARCHAR(100) | NOT NULL                    | Andi Pratama                      |
| 4  | prodi      | VARCHAR(60)  | NOT NULL                    | Informatika                       |
| 5  | angkatan   | YEAR         | NOT NULL                    | 2025                              |
| 6  | email      | VARCHAR(100) | NOT NULL                    | andi.pratama@student.untan.ac.id  |
| 7  | no_hp      | VARCHAR(20)  | NULL                        | 081250010001                      |
| 8  | created_at | TIMESTAMP    | DEFAULT CURRENT_TIMESTAMP   | 2026-11-09 08:00:00               |

ERD: satu tabel tanpa relasi (tabel `mahasiswa` berdiri sendiri).

## 4. API Endpoints
Base URL: `http://localhost:3000/api`

| NO | Method | Endpoint          | Fungsi                  | Status |
|----|--------|-------------------|-------------------------|--------|
| 1  | GET    | /mahasiswa        | Ambil semua data        | (isi setelah test Postman) |
| 2  | GET    | /mahasiswa/:id    | Ambil satu data         | (isi setelah test Postman) |
| 3  | POST   | /mahasiswa        | Tambah data             | (isi setelah test Postman) |
| 4  | PUT    | /mahasiswa/:id    | Ubah data               | (isi setelah test Postman) |
| 5  | DELETE | /mahasiswa/:id    | Hapus data              | (isi setelah test Postman) |

Contoh body POST/PUT (JSON):
```json
{ "nim": "H1101251099", "nama": "Contoh Nama", "prodi": "Informatika",
  "angkatan": 2025, "email": "contoh@student.untan.ac.id", "no_hp": "081200000000" }
```

## 5. Rancangan Frontend
| NO | Nama File View            | Rute URL    | Fungsi                              | Tailwind Komponen            |
|----|---------------------------|-------------|-------------------------------------|------------------------------|
| 1  | MahasiswaListView.vue     | /           | Daftar, cari, hapus                 | table, input, btn-danger     |
| 2  | MahasiswaCreateView.vue   | /tambah     | Form tambah data                    | grid form, btn-primary       |
| 3  | MahasiswaEditView.vue     | /edit/:id   | Form ubah data                      | grid form, btn-primary       |
| 4  | MahasiswaForm.vue (komp.) | -           | Form reusable create & edit         | grid, input, btn             |

Fitur tambahan yang diimplementasikan: **Search** dan **Toast notif**.
