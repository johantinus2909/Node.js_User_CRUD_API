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

### Link Deploy (Jika Ada)

Jika API ini sudah dideploy ke server atau platform cloud, Anda bisa menambahkan link di sini. Misalnya:

- [Link Deploy API](https://example.com)

## Instruksi Instalasi

### 1. Kloning Repository

Kloning repository ini ke komputer lokal Anda dengan perintah:

```bash
git clone <repository-url>
cd <project-folder>
