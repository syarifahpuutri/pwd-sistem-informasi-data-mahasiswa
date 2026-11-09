# Proyek CRUD Data Mahasiswa - Kelompok 3 (Kelas A)
Praktikum Pemrograman Web Dasar - Pertemuan 14. Stack: Vue 3 + Express + MySQL + Tailwind CSS.

## Struktur
```
database/   db_mahasiswa.sql   (CREATE DATABASE, tabel, seed 6 baris)
backend/    Express API (config, models, controllers, routes, server.js)
frontend/   Vue 3 + Vue Router + Axios + Tailwind (Vite)
docs/       ISIAN_LKK.md       (bahan untuk mengisi LKK)
```

## Cara menjalankan
### 1. Database
Nyalakan MySQL (XAMPP/Laragon), lalu import `database/db_mahasiswa.sql` lewat phpMyAdmin
atau: `mysql -u root < database/db_mahasiswa.sql`

### 2. Backend (port 3000)
```
cd backend
npm install
npm start
```
Sesuaikan `backend/.env` (DB_USER, DB_PASSWORD) dengan MySQL di komputer kamu.
Server harus menampilkan "Koneksi MySQL berhasil".

### 3. Frontend (port 5173)
```
cd frontend
npm install
npm run dev
```
Buka http://localhost:5173

## Endpoint
| Method | URL                      |
|--------|--------------------------|
| GET    | /api/mahasiswa           |
| GET    | /api/mahasiswa/:id       |
| POST   | /api/mahasiswa           |
| PUT    | /api/mahasiswa/:id       |
| DELETE | /api/mahasiswa/:id       |
