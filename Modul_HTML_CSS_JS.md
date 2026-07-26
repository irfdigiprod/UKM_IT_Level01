# Modul Pembelajaran Web Development: HTML, CSS, dan JavaScript
## Studi Kasus: Website Profil Pesantren Minhajul Haq

Modul ini dirancang untuk pembelajaran selama **16 Pertemuan** (1 Semester). Pembelajaran menggunakan pendekatan praktis (*project-based learning*) dengan membedah dan merekonstruksi Proyek Website **Pesantren Minhajul Haq** yang telah dibuat.

---

## Daftar Pertemuan

### [Bagian 1: Fondasi HTML5]
* [Pertemuan 1: Pengenalan Web & Anatomi Dokumen HTML](#pertemuan-1-pengenalan-web--anatomi-dokumen-html)
* [Pertemuan 2: Struktur Semantik HTML5](#pertemuan-2-struktur-semantik-html5)
* [Pertemuan 3: Hyperlink, List, dan Navigasi Halaman](#pertemuan-3-hyperlink-list-dan-navigasi-halaman)
* [Pertemuan 4: Formulir (Form) & Elemen Input HTML](#pertemuan-4-formulir-form--elemen-input-html)

### [Bagian 2: Desain Visual & Tata Letak dengan CSS3]
* [Pertemuan 5: Pengenalan CSS & Selektor Dasar](#pertemuan-5-pengenalan-css--selektor-dasar)
* [Pertemuan 6: Tipografi & Sistem Pewarnaan Kustom](#pertemuan-6-tipografi--sistem-pewarnaan-kustom)
* [Pertemuan 7: Box Model & Kustomisasi Tombol (Button)](#pertemuan-7-box-model--kustomisasi-tombol-button)
* [Pertemuan 8: Flexbox Layouting (Navbar & Footer)](#pertemuan-8-flexbox-layouting-navbar--footer)
* [Pertemuan 9: Grid Layouting (Card Program & Fasilitas)](#pertemuan-9-grid-layouting-card-program--fasilitas)
* [Pertemuan 10: CSS Variables & Penerapan Mode Gelap/Terang](#pertemuan-10-css-variables--penerapan-mode-gelapterang)
* [Pertemuan 11: Animasi Transisi & Transformasi CSS](#pertemuan-11-animasi-transisi--transformasi-css)

### [Bagian 3: Interaktivitas dengan JavaScript]
* [Pertemuan 12: Dasar JavaScript & Manipulasi DOM (Document Object Model)](#pertemuan-12-dasar-javascript--manipulasi-dom-document-object-model)
* [Pertemuan 13: Event Handling & Menu Hamburger Ponsel](#pertemuan-13-event-handling--menu-hamburger-ponsel)
* [Pertemuan 14: Logika Tab Filter Program Pendidikan](#pertemuan-14-logika-tab-filter-program-pendidikan)
* [Pertemuan 15: Pembuatan Popup Modal Box Pendaftaran](#pertemuan-15-pembuatan-popup-modal-box-pendaftaran)
* [Pertemuan 16: Validasi Formulir Kontak dengan RegEx & Integrasi Akhir](#pertemuan-16-validasi-formulir-kontak-dengan-regex--integrasi-akhir)

---

## Rincian Materi Pertemuan

### Pertemuan 1: Pengenalan Web & Anatomi Dokumen HTML
* **Tujuan**: Memahami cara kerja web, protokol HTTP, dan membuat kerangka dokumen HTML5.
* **Konsep Dasar**:
  - Web Server & Web Browser.
  - Tag, Elemen, dan Atribut dalam HTML.
  - Deklarasi Dokumen `<!DOCTYPE html>`, tag `<html>`, `<head>`, dan `<body>`.
* **Studi Kasus Proyek**:
  Buka berkas [index.html](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/index.html) bagian paling atas:
  ```html
  <!DOCTYPE html>
  <html lang="id">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pesantren Minhajul Haq - Membentuk Generasi Qur'ani & Unggul</title>
  </head>
  <body>
     <!-- Konten website diletakkan di sini -->
  </body>
  </html>
  ```
* **Tugas Mandiri**: Buat file HTML baru bernama `belajar.html` dan isi dengan struktur dasar di atas. Tambahkan tag heading `<h1>` berisi nama Anda sendiri.

---

### Pertemuan 2: Struktur Semantik HTML5
* **Tujuan**: Menerapkan tag HTML5 yang bermakna (semantik) untuk meningkatkan SEO dan aksesibilitas website.
* **Konsep Dasar**:
  - Perbedaan tag Non-Semantik (`<div>`, `<span>`) dengan tag Semantik.
  - Tag penataan layout halaman web: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, dan `<footer>`.
* **Studi Kasus Proyek**:
  Perhatikan bagaimana berkas [index.html](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/index.html) dibagi menjadi wilayah-wilayah logis:
  ```html
  <header class="header">...</header>
  <section class="hero" id="beranda">...</section>
  <section class="section-padding" id="profil">...</section>
  <section class="section-padding" id="program">...</section>
  <footer class="footer">...</footer>
  ```
* **Tugas Mandiri**: Tulis analisis singkat tentang mengapa kita lebih baik menggunakan `<header>` daripada `<div class="header">`.

---

### Pertemuan 3: Hyperlink, List, dan Navigasi Halaman
* **Tujuan**: Memahami pembuatan sistem navigasi internal dan eksternal menggunakan daftar (list) dan tautan (anchor).
* **Konsep Dasar**:
  - Ordered List (`<ol>`) dan Unordered List (`<ul>`).
  - Anchor tag `<a>` dengan atribut `href` (internal `#id` vs eksternal URL).
* **Studi Kasus Proyek**:
  Lihat menu navigasi desktop pada [index.html](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/index.html):
  ```html
  <ul class="nav-menu" id="navMenu">
    <li><a href="#beranda" class="nav-link active">Beranda</a></li>
    <li><a href="#profil" class="nav-link">Profil</a></li>
    <li><a href="#program" class="nav-link">Program</a></li>
    <li><a href="#fasilitas" class="nav-link">Fasilitas</a></li>
    <li><a href="#kontak" class="nav-link">Kontak</a></li>
  </ul>
  ```
* **Tugas Mandiri**: Tambahkan link sosial media eksternal (seperti YouTube/Instagram) di bagian footer latihan Anda menggunakan target atribut `_blank`.

---

### Pertemuan 4: Formulir (Form) & Elemen Input HTML
* **Tujuan**: Membuat wadah interaktif untuk menerima input pengguna di halaman web.
* **Konsep Dasar**:
  - Tag `<form>` dan atribut `action` serta `method`.
  - Macam-macam tipe `<input>`: `text`, `email`, `tel`, `date`, `<select>` (combobox), dan `<textarea>`.
  - Atribut validasi bawaan HTML: `required`, `placeholder`.
* **Studi Kasus Proyek**:
  Formulir Kontak pada [index.html](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/index.html):
  ```html
  <form id="contactForm" novalidate>
    <input type="text" id="contactName" class="form-control" placeholder="Nama Lengkap..." required>
    <input type="email" id="contactEmail" class="form-control" placeholder="nama@email.com..." required>
    <textarea id="contactMessage" class="form-control" required></textarea>
  </form>
  ```
* **Tugas Mandiri**: Buat formulir registrasi sederhana yang memuat input nama, tanggal lahir, dan pilihan paket belajar.

---

### Pertemuan 5: Pengenalan CSS & Selektor Dasar
* **Tujuan**: Memahami sintaksis CSS untuk menghias halaman HTML dan cara menghubungkannya.
* **Konsep Dasar**:
  - Inline CSS, Internal CSS, dan External CSS.
  - Aturan penulisan deklarasi: `selector { property: value; }`.
  - Selektor dasar: Element Selector, Class Selector (`.`), ID Selector (`#`), dan Universal Selector (`*`).
* **Studi Kasus Proyek**:
  Cara menghubungkan di [index.html](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/index.html):
  ```html
  <link rel="stylesheet" href="style.css">
  ```
  Contoh selektor universal reset di [style.css](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/style.css):
  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```
* **Tugas Mandiri**: Buat file `style.css` eksternal dan atur agar warna latar belakang tag `<body>` menjadi krem (`#fdfbf7`).

---

### Pertemuan 6: Tipografi & Sistem Pewarnaan Kustom
* **Tujuan**: Menerapkan font pihak ketiga (Google Fonts) dan merancang skema warna primer & sekunder yang konsisten.
* **Konsep Dasar**:
  - Integrasi `@import` untuk memuat web font.
  - Kode warna CSS: Hexadecimal (`#602515`), RGB (`rgb(96, 37, 21)`), dan RGBA.
  - Font styling: `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.
* **Studi Kasus Proyek**:
  Pengaturan di baris pertama [style.css](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/style.css):
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
  
  body {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }
  ```
* **Tugas Mandiri**: Ganti font website latihan Anda dengan Google Font lain pilihan Anda (misalnya: *Outfit* atau *Inter*).

---

### Pertemuan 7: Box Model & Kustomisasi Tombol (Button)
* **Tujuan**: Memahami konsep Box Model CSS (Content, Padding, Border, Margin) dan teknik pembuatan tombol yang interaktif.
* **Konsep Dasar**:
  - Sifat-sifat Box Model: Margin (jarak luar), Padding (jarak dalam), Border (garis tepi).
  - Efek interaksi `:hover`, `:active`, `:focus` (Pseudo-class).
  - Properti `cursor: pointer` dan `border-radius` untuk sudut melengkung.
* **Studi Kasus Proyek**:
  Komponen kelas `.btn` dan `.btn-primary` di [style.css](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/style.css):
  ```css
  .btn {
    display: inline-flex;
    padding: 12px 28px;
    border-radius: 50px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  .btn-primary {
    background-color: var(--secondary); /* Warna #f8ae19 */
    color: #120907;
  }
  .btn-primary:hover {
    background-color: transparent;
    color: var(--secondary);
    border-color: var(--secondary);
    transform: translateY(-2px);
  }
  ```
* **Tugas Mandiri**: Buat tombol dengan efek `:hover` yang mengubah warna latar belakangnya secara perlahan dari warna maroon (`#602515`) ke warna emas (`#f8ae19`).

---

### Pertemuan 8: Flexbox Layouting (Navbar & Footer)
* **Tujuan**: Menyusun tata letak satu dimensi (baris atau kolom) dengan fleksibel tanpa teknik float yang usang.
* **Konsep Dasar**:
  - Flex Container properti: `display: flex`, `justify-content` (perataan horizontal), `align-items` (perataan vertikal), dan `flex-direction`.
  - Flex Item properti: `flex-grow`, `flex-shrink`, dan `gap`.
* **Studi Kasus Proyek**:
  Menyusun struktur Navbar di [style.css](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/style.css):
  ```css
  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
  }
  .nav-menu {
    display: flex;
    align-items: center;
    gap: 32px;
  }
  ```
* **Tugas Mandiri**: Buat struktur header latihan Anda dan posisikan logo di ujung kiri serta menu navigasi di ujung kanan menggunakan properti `justify-content: space-between`.

---

### Pertemuan 9: Grid Layouting (Card Program & Fasilitas)
* **Tujuan**: Merancang tata letak dua dimensi (baris dan kolom sekaligus) untuk grid kartu responsif.
* **Konsep Dasar**:
  - `display: grid`.
  - Pendefinisian kolom dengan `grid-template-columns` dan fungsi `repeat()`.
  - Membuat grid auto-fit responsif tanpa media query: `repeat(auto-fit, minmax(280px, 1fr))`.
  - Pengaturan celah grid menggunakan `gap`.
* **Studi Kasus Proyek**:
  Tingkat kolom Fasilitas Pesantren pada [style.css](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/style.css):
  ```css
  .facilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
  ```
* **Tugas Mandiri**: Buat tata letak grid untuk 3 buah kartu informasi dengan celah (*gap*) sebesar 20px.

---

### Pertemuan 10: CSS Variables & Penerapan Mode Gelap/Terang
* **Tujuan**: Membuat variabel CSS untuk mendukung kustomisasi tema dinamis (Mode Gelap & Terang).
* **Konsep Dasar**:
  - Pendeklarasian variabel CSS dengan tanda hubung ganda (`--nama-variabel`).
  - Memanggil variabel menggunakan `var(--nama-variabel)`.
  - Selektor Pseudo-class `:root` dan modifikasi selektor tema atribut `[data-theme="dark"]`.
* **Studi Kasus Proyek**:
  Konfigurasi skema warna di [style.css](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/style.css):
  ```css
  :root {
    --bg-primary: #fdfbf7;
    --text-primary: #2a1a16;
  }
  [data-theme="dark"] {
    --bg-primary: #120907;
    --text-primary: #fdfbf7;
  }
  body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
  }
  ```
* **Tugas Mandiri**: Deklarasikan variabel `--primary-color: #602515` di `:root` dan gunakan variabel tersebut untuk mengubah warna font judul website Anda.

---

### Pertemuan 11: Animasi Transisi & Transformasi CSS
* **Tujuan**: Menerapkan gerakan interaktif halus (micro-animations) pada elemen web untuk pengalaman pengguna premium.
* **Konsep Dasar**:
  - Properti `transition`: menentukan properti, durasi, dan fungsi waktu (*timing function* seperti `cubic-bezier` atau `ease`).
  - Properti `transform`: `scale()`, `translate()`, `rotate()`.
  - Definisi animasi custom menggunakan `@keyframes`.
* **Studi Kasus Proyek**:
  Efek hover zoom kartu program dan keyframe masuk konten di [style.css](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/style.css):
  ```css
  .program-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .program-card:hover {
    transform: translateY(-8px);
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  ```
* **Tugas Mandiri**: Buat sebuah kotak `<div>` kustom yang ketika diarahkan kursor (:hover) akan berputar 5 derajat dan membesar (`scale(1.15)`).

---

### Pertemuan 12: Dasar JavaScript & Manipulasi DOM (Document Object Model)
* **Tujuan**: Mengenal dasar pemrograman JavaScript, cara kerja DOM, dan pemilihan elemen HTML secara dinamis.
* **Konsep Dasar**:
  - Peran JavaScript dalam web (interaksi dinamis client-side).
  - Variabel (`const`, `let`) dan Tipe Data.
  - Memilih elemen HTML: `document.getElementById()`, `document.querySelectorAll()`.
  - Membaca/mengubah kelas elemen: `classList.add()`, `classList.remove()`, `classList.toggle()`.
* **Studi Kasus Proyek**:
  Lihat inisialisasi awal di berkas [app.js](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/app.js):
  ```javascript
  document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    // Membaca/Mengubah atribut DOM
    document.documentElement.setAttribute('data-theme', 'light');
  });
  ```
* **Tugas Mandiri**: Tulis skrip JS yang dapat menemukan elemen ber-ID `judul` di HTML Anda dan ubah konten teksnya menggunakan `.textContent`.

---

### Pertemuan 13: Event Handling & Menu Hamburger Ponsel
* **Tujuan**: Mendengarkan aksi pengguna (klik, gulir) dan meresponsnya secara dinamis dengan mengaktifkan laci menu ponsel.
* **Konsep Dasar**:
  - Metode `addEventListener()`.
  - Macam Event: `'click'`, `'scroll'`, `'submit'`, `'DOMContentLoaded'`.
  - Membuat menu responsif laci (*drawer menu*).
* **Studi Kasus Proyek**:
  Logika menu hamburger di [app.js](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/app.js):
  ```javascript
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');

  hamburgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    const icon = hamburgerBtn.querySelector('i');
    if (navMenu.classList.contains('active')) {
      icon.classList.replace('fa-bars', 'fa-xmark');
    } else {
      icon.classList.replace('fa-xmark', 'fa-bars');
    }
  });
  ```
* **Tugas Mandiri**: Buat tombol sederhana yang ketika diklik akan memunculkan popup peringatan `alert("Tombol berhasil diklik!")`.

---

### Pertemuan 14: Logika Tab Filter Program Pendidikan
* **Tujuan**: Menerapkan logika filtrasi data di sisi klien berdasarkan kategori yang dipilih pengguna.
* **Konsep Dasar**:
  - Pembacaan data atribut HTML5 (`data-*`).
  - Perulangan data array menggunakan metode `.forEach()`.
  - Fungsi waktu jeda bawaan JS: `setTimeout()`.
* **Studi Kasus Proyek**:
  Fungsi filter dinamis di [app.js](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/app.js):
  ```javascript
  const filterButtons = document.querySelectorAll('.filter-btn');
  const programCards = document.querySelectorAll('.program-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');

      programCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  ```
* **Tugas Mandiri**: Tulis logika perulangan sederhana yang menyaring data hewan yang berkategori "mamalia" dari sekumpulan elemen HTML.

---

### Pertemuan 15: Pembuatan Popup Modal Box Pendaftaran
* **Tujuan**: Membuat komponen jendela popup dialog modal interaktif tanpa memuat ulang halaman.
* **Konsep Dasar**:
  - Mengontrol alur halaman (*page flow control*).
  - Menonaktifkan fungsi gulir latar belakang menggunakan `document.body.style.overflow = 'hidden'`.
  - Struktur modal yang melayang di atas konten utama menggunakan z-index.
* **Studi Kasus Proyek**:
  Membuka dan menutup modal pendaftaran di [app.js](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/app.js):
  ```javascript
  const registerModal = document.getElementById('registerModal');
  const openBtn = document.getElementById('openRegisterModalBtn');

  function openModal() {
    registerModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    registerModal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
  openBtn.addEventListener('click', openModal);
  ```
* **Tugas Mandiri**: Buat kerangka modal sederhana yang melayang di tengah layar saat tombol pendaftaran diklik, serta dapat ditutup saat mengklik area di luar modal.

---

### Pertemuan 16: Validasi Formulir Kontak dengan RegEx & Integrasi Akhir
* **Tujuan**: Memvalidasi data masukan dari formulir menggunakan pola Regular Expression (RegEx) sebelum dikirimkan ke server.
* **Konsep Dasar**:
  - Mencegah perilaku default pengiriman form: `event.preventDefault()`.
  - Regular Expression (RegEx) untuk verifikasi Email dan Angka WhatsApp.
  - Integrasi semua komponen (HTML, CSS, JS) menjadi satu proyek akhir.
* **Studi Kasus Proyek**:
  Fungsi validasi di [app.js](file:///C:/Users/irfan/OneDrive/Documents/STAI-2026-2027/Modul%20IT/HTML_Basic/app.js):
  ```javascript
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  function validatePhone(phone) {
    const re = /^[0-9+]{9,15}$/;
    return re.test(phone);
  }
  ```
* **Tugas Mandiri**: Implementasikan validasi form pendaftaran kustom Anda sendiri. Pastikan pengguna tidak dapat mengirimkan data jika kolom email tidak mengandung tanda '@' dan '.' serta nomor WhatsApp kurang dari 9 digit.
