# Express.js API - README

## **Pendahuluan**
Proyek ini adalah API sederhana yang dibangun menggunakan **Express.js**. API ini dirancang untuk menangani operasi CRUD (Create, Read, Update, Delete) dengan mudah.

---

## **Persyaratan**
Sebelum memulai, pastikan telah melakukan langkah-langkah berikut :
- **Node.js** (versi terbaru)
- **npm** atau **yarn**
- **Git** (opsional untuk mengelola versi kode)

---

## **Instalasi**
Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di lingkungan lokal Anda:

1. **Clone Repository:**
   ```bash
   git clone <URL-repository>
   cd express-js-api
   ```
2. **Inisialisasi Proyek:**
   ```bash
   npm init -y
   ```
3. **Instal Dependensi:**
   ```bash
   npm install express
   ```
4. **Tambahkan File Utama:**
   Buat file misalkan **`index.js`** 
   ```javascript
   ```
5. **Jalankan Server:**
   ```bash
   node index.js
   ```
6. **Akses API:**
   Buka browser atau Postman dan akses:
   ```
http://localhost:3000/
```

---

## **Struktur Folder**
```
.
├── node_modules
├── index.js
├── package.json
├── package-lock.json
└── README.md
```

---

## **Endpoints**
Berikut adalah daftar endpoint yang tersedia:

1. **GET /**  
   - **Deskripsi:** Mengembalikan pesan selamat datang.
   - **Contoh Respons:**
     ```json
     {
       "message": "Welcome to Express API!"
     }
     ```

---

## **Tambahan**
- Untuk menambahkan fitur baru, buat route tambahan di dalam file **`index.js`**.
- Gunakan **Postman** atau **Insomnia** untuk menguji API.
- Pastikan selalu melakukan commit dan push perubahan ke repository GitHub.

---


