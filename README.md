# API Node.js dengan MySQL: Manajemen Pengguna

Proyek ini adalah sebuah API yang dibangun menggunakan **Node.js**, **Express**, dan **MySQL** untuk mengelola data pengguna. API ini memungkinkan untuk melakukan operasi dasar seperti menambah, memperbarui, menghapus, dan mengambil data pengguna.

Fitur tambahan:
- Validasi input untuk field `name`, `email`, dan `age`.
- Pencatatan setiap permintaan ke dalam file log (`requests.log`).

## Deskripsi Singkat Proyek

API ini memungkinkan Anda untuk mengelola data pengguna menggunakan endpoint berikut:
- **GET /users**: Mengambil daftar semua pengguna.
- **GET /users/:id**: Mengambil data pengguna berdasarkan ID.
- **POST /users**: Menambahkan pengguna baru.
- **PUT /users/:id**: Memperbarui data pengguna berdasarkan ID.
- **DELETE /users/:id**: Menghapus pengguna berdasarkan ID.

## Instruksi Instalasi

### 1. Kloning Repository

Kloning repository ini ke komputer lokal Anda dengan perintah:

```bash
git clone https://github.com/johantinus2909/Node.js_User_CRUD_API.git
cd folder_project
```
### 2. Instal Dependensi

Setelah berada di folder proyek, jalankan perintah berikut untuk menginstal semua dependensi yang diperlukan:
```bash
npm install
```

### 3. Konfigurasi Variabel Lingkungan

Buat file .env di direktori root proyek dan sesuaikan dengan file .env.example yang sudah disediakan. File .env ini akan berisi konfigurasi untuk koneksi ke database MySQL Anda.

Contoh isi file .env:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root                # Ganti dengan username MySQL Anda
DB_PASSWORD=your-password    # Ganti dengan password MySQL Anda
DB_NAME=user_management      # Nama database yang akan digunakan
```

### 4. Siapkan Database MySQL

Masuk ke MySQL dan buat database baru:
```sql
CREATE DATABASE user_management;
```
Buat tabel users untuk menyimpan data pengguna:

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  age INT NOT NULL
);
```
### 5. Jalankan Aplikasi

Setelah konfigurasi selesai, Anda dapat menjalankan aplikasi dengan perintah berikut:
```bash
npm start
```
Server akan berjalan di http://localhost:3000.

## API Endpoints

### 1. GET /users

Mengambil daftar semua pengguna.
Permintaan:
```bash
GET /users
```
Respons:
```json
[
  {
    "id": 1,
    "name": "jailani",
    "email": "jailani@gmail.com",
    "age": 30
  }
]
```
### 2. GET /users/:id

Mengambil data pengguna berdasarkan ID.
Permintaan:
```bash
GET /users/1
```
Respons:
```json
{
  "id": 1,
  "name": "jailani",
  "email": "jailani@gmail.com",
  "age": 30
}
```
### 3. POST /users

Menambahkan pengguna baru.
Permintaan:

```bash
POST /users
Content-Type: application/json
{
  "name": "mantapu",
  "email": "mantapu@gmail.com",
  "age": 27
}
```
Respons:
```json
{
  "id": 3,
  "name": "mantapu",
  "email": "mantapu@gmail.com",
  "age": 27
}
```

### 4. PUT /users/:id
Memperbarui data pengguna berdasarkan ID.

Permintaan:
```bash
PUT /users/3
Content-Type: application/json
{
  "name": "mantapu",
  "email": "mantapu@gmail.com",
  "age": 28
}
```
Respons:
```json
{
  "id": 3,
  "name": "mantapu",
  "email": "mantapu@gmail.com",
  "age": 28
}
```
### 5. DELETE /users/:id
Menghapus pengguna berdasarkan ID.

Permintaan:
```bash
DELETE /users/3
```
Respons:
```json
{
  "message": "User with ID 3 has been deleted."
}
```
### Middleware

#### Validasi Input
Aplikasi ini menggunakan middleware untuk memastikan bahwa input yang diterima valid:

- **name**: Harus berupa string yang tidak kosong.
- **email**: Harus sesuai dengan format email yang valid.
- **age**: Harus berupa angka dan lebih besar dari 0.

Jika ada input yang tidak valid, API akan mengembalikan respons error 400 (Bad Request).

#### Pencatatan Permintaan (Logging)
Semua permintaan yang masuk akan dicatat dalam file requests.log. Log ini mencatat informasi berikut:

- Metode HTTP
- URL permintaan
- Kode status respons
- Timestamp permintaan
- Pengujian
- Menjalankan Pengujian Unit
  
Unit test ditulis menggunakan Jest. Untuk menjalankan pengujian, gunakan perintah berikut:

```bash
npm test
```
Pengujian mencakup semua endpoint API, termasuk pengecekan validasi dan pengelolaan data pengguna.

