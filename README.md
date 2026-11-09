# Sistem Informasi Data Mahasiswa
**Kelompok 3 – Kelas A**

Proyek ini merupakan aplikasi CRUD Data Mahasiswa yang dibuat untuk memenuhi tugas Praktikum Pemrograman Web Dasar Pertemuan 14.

## 1. Teknologi yang Digunakan

- **Frontend:** Vue 3, Vue Router, Vite, dan Tailwind CSS.
- **Backend:** Node.js dan Express.js.
- **Database:** MySQL.
- **HTTP Client:** Axios.

## 2. Struktur Folder

```text
project/
├── database/
│   └── db_mahasiswa.sql
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   ├── index.html
│   └── vite.config.js
├── docs/
│   └── ISIAN_LKK.md
└── README.md
```

## 3. Persiapan

Pastikan perangkat sudah memiliki:
- Node.js dan npm.
- MySQL melalui XAMPP atau Laragon.
- Browser.
- Visual Studio Code.

## 4. Cara Menjalankan Aplikasi

### A. Database

1. Jalankan MySQL melalui Laragon atau XAMPP.
2. Buka phpMyAdmin.
3. Import file `database/db_mahasiswa.sql`.
4. Pastikan database dan tabel berhasil dibuat.

### B. Backend

Buka terminal pada folder backend:

```bash
cd backend
npm install
node server.js
```

Backend berjalan pada:

`http://localhost:3000`

Sesuaikan konfigurasi koneksi MySQL pada file `backend/.env`.

### C. Frontend

Buka terminal baru pada folder frontend:

```bash
cd frontend
npm install
npm run dev
```

Buka alamat yang ditampilkan oleh Vite, biasanya:

`http://localhost:5173`

## 5. Endpoint API

| Method | Endpoint | Keterangan |
|---|---|---|
| GET | `/api/mahasiswa` | Menampilkan seluruh data |
| GET | `/api/mahasiswa/:id` | Menampilkan data berdasarkan ID |
| POST | `/api/mahasiswa` | Menambahkan data |
| PUT | `/api/mahasiswa/:id` | Mengubah data |
| DELETE | `/api/mahasiswa/:id` | Menghapus data |

## 6. Fitur Utama

Aplikasi ini dirancang untuk melakukan pengelolaan data mahasiswa melalui operasi CRUD:

- **Create:** Menambahkan data mahasiswa.
- **Read:** Menampilkan data mahasiswa.
- **Update:** Mengubah data mahasiswa.
- **Delete:** Menghapus data mahasiswa.

## 7. Anggota Kelompok
Anggota:
Neisya Fadilla Nurkhairunnisa H1101251007
Gendis Setyawan Putri H1101251011
Syarifah Putri H1101251013
Shinta Ayuwidati H1101251019
Desty Ayudya H1101251023
Novi Aulia H1101251043

