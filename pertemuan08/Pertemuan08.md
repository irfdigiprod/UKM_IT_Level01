# Pertemuan 8: Flexbox Layouting (Navbar & Footer)

## 1. Tujuan Pembelajaran

Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:

- Memahami konsep dasar CSS _Flexible Box Layout_ (Flexbox) untuk menata letak satu dimensi (baris atau kolom).
- Menguasai properti penting kontainer Flexbox (`display: flex`, `justify-content`, `align-items`, `gap`, `flex-direction`).
- Menerapkan tata letak responsif pada bagian Kepala Situs (Navbar Glassmorphism) dan Kaki Halaman (Footer) proyek website Pesantren Minhajul Haq.

---

## 2. Mengapa Memakai Flexbox?

Sebelum Flexbox diperkenalkan, penataan letak horizontal (berdampingan) dilakukan dengan properti `float` atau `display: inline-block`. Metode-metode lama tersebut sangat sulit dikelola, sering memicu _layout breaking_, dan tidak otomatis menyesuaikan diri dengan ukuran layar.

**Flexbox** adalah sistem tata letak modern yang dirancang untuk mendistribusikan ruang kosong di antara elemen anak secara cerdas dan fleksibel, baik secara horizontal maupun vertikal.

---

## 3. Konsep Sumbu & Properti Utama Flexbox

Saat kita menuliskan `display: flex` pada kontainer induk, elemen-elemen anak di dalamnya akan langsung berubah menjadi **Flex Items** yang tersusun berdampingan dalam satu sumbu utama.

### A. Sumbu Utama (Main Axis & Cross Axis)

- **Main Axis (Sumbu Utama)**: Arah horizontal (baris) secara bawaan.
- **Cross Axis (Sumbu Silang)**: Arah tegak lurus (vertikal) secara bawaan.

### B. Properti Induk Kontainer Flexbox

1. **`justify-content`**: Mengatur penyejajaran elemen anak di sepanjang **Sumbu Utama (Main Axis)**.
   - `flex-start`: Merapat ke kiri/awal.
   - `flex-end`: Merapat ke kanan/akhir.
   - `center`: Terpusat di tengah.
   - `space-between`: Menyebar rata, dengan elemen pertama di ujung kiri dan elemen terakhir di ujung kanan (sangat ideal untuk Navbar).
2. **`align-items`**: Mengatur penyejajaran elemen anak di sepanjang **Sumbu Silang (Cross Axis / Vertikal)**.
   - `center`: Menyejajarkan bagian tengah elemen secara vertikal (sangat berguna agar teks logo dan menu sejajar lurus).
   - `stretch`: Elemen meregang memenuhi tinggi kontainer.
3. **`gap`**: Menentukan jarak celah kosong antar elemen anak tanpa perlu memberikan margin satu-satu.
4. **`flex-direction`**: Mengubah sumbu utama menjadi kolom (`column`) atau baris (`row`).

---

## 4. Bedah Progres Kode Proyek (Navbar & Footer)

Mari kita perhatikan bagaimana Flexbox diterapkan untuk menata letak Navbar kepala situs secara elegan di berkas `style.css`:

```css
/* Kontainer pembatas lebar konten */
.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto; /* Menjaga kontainer tetap di tengah layar secara horizontal */
}

/* Memposisikan Navbar agar selalu melayang di atas saat di-scroll */
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(253, 251, 247, 0.85); /* Semi transparan */
  backdrop-filter: blur(12px); /* Efek Kaca Blur (Glassmorphism) */
  border-bottom: 1px solid rgba(96, 37, 21, 0.06);
}

/* Penataan Letak Navbar (Flexbox) */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Logo di kiri, menu di kanan */
  padding: 20px 0;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 32px; /* Jarak antar menu navigasi */
}
```

### C. Penataan Letak & Latar Belakang Section Hero (Flexbox & Gambar Background)

Selain untuk Navbar dan Footer, Flexbox juga kita gunakan pada Section Hero (`.hero`) untuk menyejajarkan konten di tengah layar secara vertikal serta menerapkan latar belakang gambar yang memenuhi layar secara penuh:

```css
.hero {
  position: relative;
  min-height: 100vh; /* Memenuhi tinggi layar secara penuh */
  display: flex;
  align-items: center; /* Menyejajarkan konten di tengah secara vertikal */
  background-image: url("../hero.webp"); /* Mengambil gambar latar dari direktori utama */
  background-size: cover; /* Gambar otomatis menutupi seluruh area hero */
  background-position: center; /* Memastikan bagian tengah gambar tetap terlihat */
  background-attachment: fixed; /* Efek gulir parallax statis */
  padding-top: 100px;
}
```

---

## 5. Latihan Praktik Pertemuan 8 (Progres Berkas Proyek)

### Instruksi:

1. Periksa berkas `index.html` dan `style.css` di dalam folder `pertemuan08/`.
2. Jalankan `index.html` di browser Anda.
   - **Amati**: Navbar atas sekarang melayang statis (_sticky header_) di bagian atas layar dengan latar belakang efek kaca buram (_glassmorphism_). Logo pesantren berada di sisi kiri dan daftar link menu berjejer rapi di sisi kanan dengan jarak renggang yang seimbang.
   - Gulir halaman ke bawah, perhatikan bagaimana bagian-bagian section meluncur di bawah navbar kaca transparan tersebut.
   - Lihat pula area Footer di bawah. Struktur link sudah tersusun menyebar rata menggunakan tata letak flexbox.
3. **Tantangan Mandiri**: Di file `style.css` bagian Pertemuan 8, ubah properti `flex-direction` pada selektor `.footer-grid` (jika ada) atau buat selektor baru untuk `.social-links` agar tombol-tombol sosial media berjejer tegak ke bawah menjadi kolom menggunakan `flex-direction: column` dengan jarak `gap: 10px`.
