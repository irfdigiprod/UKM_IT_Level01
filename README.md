# 🕌 Modul Pembelajaran Web Development: Website Profil Pesantren Minhajul Haq

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Glossary/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Selamat datang di repositori **Modul Pembelajaran Web Development (HTML, CSS, dan JavaScript)** untuk semester 1 program studi Teknologi Informasi STAI 2026-2027. Repositori ini berisi seluruh materi pembelajaran, studi kasus, serta kode sumber latihan dari **Pertemuan 1 hingga Pertemuan 16** (1 Semester).

Proyek utama dalam pembelajaran ini menggunakan pendekatan _project-based learning_ (pembelajaran berbasis proyek) dengan membangun dan merekonstruksi **Website Profil Pondok Pesantren Minhajul Haq**.

---

## 📋 Fitur Utama Website Proyek

Website Pesantren Minhajul Haq yang dibangun memiliki fitur-fitur modern sebagai berikut:

1. **Desain Responsif & Semantik HTML5**: Menggunakan elemen semantik (`<header>`, `<main>`, `<section>`, `<nav>`, `<footer>`) untuk SEO dan aksesibilitas yang optimal.
2. **Tata Letak CSS Modern**: Menggunakan sistem layouting tingkat lanjut seperti **Flexbox** (untuk Navbar & Footer) dan **Grid Layout** (untuk Card Program Pendidikan & Fasilitas).
3. **Mode Gelap/Terang (Dark/Light Mode)**: Menggunakan **CSS Variables** untuk transisi tema yang halus dan dinamis.
4. **Interaktivitas JavaScript (DOM Manipulation)**:
   - Menu hamburger yang interaktif pada perangkat seluler.
   - Sistem **Tab Filter** untuk menyaring program pendidikan (Ula, Wustha, Ulya, dll.).
   - **Popup Modal Box** interaktif untuk alur pendaftaran santri baru.
5. **Validasi Formulir**: Validasi input formulir kontak secara _client-side_ menggunakan **Regular Expression (RegEx)**.

---

## 📂 Struktur Repositori

Repositori ini disusun secara bertahap (per-pertemuan) agar memudahkan mahasiswa/pengembang mengikuti perkembangan materi dari nol hingga selesai.

```text
├── .git/
├── pertemuan01/              # Folder Materi Pertemuan 1
│   ├── index.html            # Kerangka dasar HTML5
│   └── Pertemuan01.md        # Panduan & teori Pertemuan 1
├── ...
├── pertemuan15/              # Folder Materi Pertemuan 15
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── Pertemuan15.md
├── pertemuan16/              # Folder Materi Pertemuan 16
│   ├── index.html
│   ├── style.css
│   ├── app.js
│   └── Pertemuan16.md
├── index.html                # Kode HTML website final (produksi)
├── style.css                 # Kode CSS website final (produksi)
├── app.js                    # Kode JavaScript website final (produksi)
├── hero.webp                  # Aset gambar utama website
├── Modul_HTML_CSS_JS.md      # Silabus & dokumen modul pembelajaran lengkap
├── LICENSE                   # Lisensi Creative Commons Attribution 4.0 International
└── README.md                 # Dokumentasi proyek ini
```

Setiap direktori `pertemuanXX/` memiliki berkas `.md` mandiri yang berisi rangkuman materi teori, tujuan pembelajaran, potongan kode contoh, serta tugas mandiri untuk pertemuan tersebut.

---

## 📖 Ringkasan Silabus & Materi Pembelajaran

Modul ini dibagi menjadi 3 bagian utama:

### Bagian 1: Fondasi HTML5 (Pertemuan 1 - 4)

- **Pertemuan 1**: Pengenalan Web, Anatomi Dokumen HTML, Tag, Elemen, & Atribut.
- **Pertemuan 2**: Struktur Semantik HTML5 (Header, Nav, Section, Footer) untuk SEO.
- **Pertemuan 3**: Sistem Link (Hyperlink), Ordered/Unordered List, & Menu Navigasi.
- **Pertemuan 4**: Elemen Formulir (Form), Berbagai Tipe Input, Placeholder, & Atribut `required`.

### Bagian 2: Desain Visual & Tata Letak dengan CSS3 (Pertemuan 5 - 11)

- **Pertemuan 5**: Pengenalan CSS (Inline, Internal, External) & Selektor Dasar.
- **Pertemuan 6**: Integrasi Google Fonts, Tipografi, & Sistem Pewarnaan Kustom (HEX, RGB, RGBA).
- **Pertemuan 7**: CSS Box Model (Margin, Padding, Border, Content) & Desain Tombol (Button).
- **Pertemuan 8**: Tata Letak Flexbox (Studi Kasus: Membuat Header & Navbar Responsif).
- **Pertemuan 9**: Tata Letak CSS Grid (Studi Kasus: Layout Kartu Program & Galeri Fasilitas).
- **Pertemuan 10**: CSS Custom Properties (Variables) & Implementasi Dark Mode.
- **Pertemuan 11**: Efek Transisi, Efek Hover, & Transformasi 2D/3D pada Elemen.

### Bagian 3: Interaktivitas dengan JavaScript (Pertemuan 12 - 16)

- **Pertemuan 12**: Dasar JavaScript, Seleksi Elemen DOM (`querySelector`, `getElementById`).
- **Pertemuan 13**: Event Handling, Fungsi callback, & Pembuatan Menu Hamburger Responsif.
- **Pertemuan 14**: Logika Algoritma Filter Tab untuk Program Pendidikan berbasis Class Toggle.
- **Pertemuan 15**: Pembuatan Dialog Modal Popup Pendaftaran (Show/Hide Modal).
- **Pertemuan 16**: Validasi Formulir dengan Regular Expression (RegEx) & Integrasi Akhir Proyek.

_Detail penjelasan materi dan instruksi tugas mandiri dapat dibaca secara lengkap di berkas [Modul_HTML_CSS_JS.md](file:///c:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/Modul_HTML_CSS_JS.md)._

---

## 🚀 Cara Menjalankan Proyek Latihan

Untuk melihat hasil akhir proyek atau mencoba latihan per-pertemuan:

### Metode 1: Menggunakan Browser Langsung

1. Buka folder repositori ini di komputer Anda.
2. Klik dua kali pada file `index.html` di root (untuk proyek final) atau `index.html` di dalam folder pertemuan tertentu (misalnya `pertemuan15/index.html`).
3. File akan otomatis terbuka di browser pilihan Anda (Google Chrome, Firefox, Edge, dll.).

### Metode 2: Menggunakan Ekstensi Live Server (Sangat Direkomendasikan)

Jika Anda menggunakan **Visual Studio Code**:

1. Pasang ekstensi **Live Server** oleh Ritwick Dey dari VS Code Marketplace.
2. Buka folder repositori ini di VS Code.
3. Klik kanan pada file `index.html` dan pilih **Open with Live Server**, atau klik tombol **Go Live** di sudut kanan bawah status bar.
4. Setiap kali Anda melakukan perubahan kode pada file HTML, CSS, atau JS, halaman browser akan otomatis memuat ulang (_auto-reload_).

---

## 📄 Lisensi (License)

Proyek dan modul pembelajaran ini dilisensikan di bawah **Creative Commons Attribution 4.0 International License (CC BY 4.0)**.

[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by/4.0/)

Artinya, Anda bebas untuk:

- **Membagikan (Share)** — menyalin dan menyebarluaskan materi ini dalam media atau format apa pun.
- **Mengadaptasi (Adapt)** — menggubah, mengubah, dan membuat turunan dari materi ini untuk kepentingan apa pun, bahkan secara komersial.

Dengan syarat:

- **Atribusi (Attribution)** — Anda harus memberikan kredit yang sesuai, mencantumkan tautan ke lisensi, dan menunjukkan jika ada bagian yang diubah. Anda dapat melakukannya dengan cara yang wajar, tetapi tidak dengan cara yang mengisyaratkan bahwa pemberi lisensi mendukung Anda atau penggunaan Anda.

Detail lengkap dari pasal hukum lisensi ini dapat dibaca pada berkas [LICENSE](file:///c:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/LICENSE) yang berada di repositori ini.
