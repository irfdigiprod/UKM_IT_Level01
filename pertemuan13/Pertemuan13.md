# Pertemuan 13: JavaScript Event Handling & Navigasi Mobile

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami konsep *Event Handling* (penanganan aksi pengguna) di JavaScript.
* Menerapkan metode `.addEventListener()` untuk mendeteksi event klik dan gulir layar.
* Membuat fungsi toggle tema kustom (gelap/terang) interaktif yang mengingat pilihan pengguna menggunakan `localStorage`.
* Merancang aksi navigasi mobile (menu hamburger) yang membuka laci menu samping secara responsif.

---

## 2. Apa itu Event Handling?
Dalam pemrograman web, **Event** adalah segala kejadian atau aksi yang dilakukan oleh pengguna atau browser terhadap elemen halaman web.
* Contoh aksi pengguna: Mengklik tombol, mengetik huruf, menggeser kursor mouse, atau menggulir halaman (*scrolling*).

**Event Handler** adalah fungsi JavaScript yang bertugas mendengarkan (*listen*) kejadian tersebut dan menjalankan baris perintah tertentu saat kejadian itu terjadi.

Sintaksis dasar mendengarkan event klik:
```javascript
targetElemen.addEventListener('nama_event', () => {
  // Jalankan kode di sini ketika event terjadi
});
```

---

## 3. Logika Toggle Tema & LocalStorage
Untuk membuat tombol tema gelap/terang kita berfungsi, kita mendengarkan event klik pada tombol `#themeToggleBtn` dan mengubah atribut `data-theme` pada tag `<html>`.

Agar saat pengguna menyegarkan (refresh) halaman atau membuka kembali website di lain hari tema tidak kembali ke awal, kita menyimpannya di memori browser bernama **`localStorage`**:
```javascript
const themeToggleBtn = document.getElementById('themeToggleBtn');

// A. Baca preferensi tema yang tersimpan sebelumnya, default ke 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);

// B. Dengarkan klik tombol untuk mengganti tema
themeToggleBtn.addEventListener('click', () => {
  const activeTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme); // Terapkan tema baru
  localStorage.setItem('theme', newTheme); // Simpan pilihan di memori browser
});
```

---

## 4. Menu Hamburger Navigasi Ponsel
Pada layar ponsel pintar, menu navigasi baris samping kanan disembunyikan di luar layar kanan (`right: -100%` di CSS). Kita akan memunculkannya dengan mengklik tombol ikon garis tiga (hamburger) yang menyisipkan kelas `.active` (`right: 0` di CSS) pada kontainer menu.

Logika JavaScript menu mobile:
```javascript
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');

hamburgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active'); // Membuka/menutup menu laci
  
  // Mengubah ikon hamburger bars (☰) menjadi ikon silang x (✕) secara bergantian
  const icon = hamburgerBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});
```

---

## 5. Latihan Praktik Pertemuan 13 (Progres Berkas Proyek)

### Instruksi:
1. Periksa berkas `index.html`, `style.css`, dan `app.js` pada folder `pertemuan13/`.
2. Buka berkas `index.html` dan perhatikan penambahan tombol hamburger di bagian `<nav>`:
   ```html
   <button class="hamburger" id="hamburgerBtn" aria-label="Open Menu">
     <i class="fa-solid fa-bars"></i>
   </button>
   ```
3. Buka berkas `app.js` dan pelajari baris kode di bawah komentar pembatas `/* ============ MATERI PERTEMUAN 13 ============ */`.
4. Jalankan `index.html` di browser Anda.
   * **Amati**: Tombol tema berbentuk lingkaran bulan sekarang sudah **berfungsi penuh**! Ketika diklik, warna website akan berubah halus menjadi gelap, ikon berubah menjadi matahari, dan jika halaman di-refresh, pilihan tema gelap tetap tersimpan secara permanen.
   * Coba ubah mode tampilan browser ke tampilan mobile (klik kanan -> Inspect -> klik ikon Device Toolbar). Klik tombol hamburger di sudut kanan atas. Menu laci samping akan meluncur masuk secara interaktif dengan animasi yang mulus.
5. **Tantangan Mandiri**: Di berkas `app.js` bagian Pertemuan 13, tambahkan sebuah event listener `'scroll'` pada objek global `window` yang mendeteksi jika layar di-scroll melebihi `50px` dari atas. Jika ya, tambahkan kelas `scrolled` pada elemen header `#header`, dan jika kurang dari `50px` hapus kelas tersebut (Petunjuk: Gunakan properti `window.scrollY`).
