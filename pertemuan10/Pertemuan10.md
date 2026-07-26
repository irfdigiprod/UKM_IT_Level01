# Pertemuan 10: CSS Variables & Penerapan Mode Gelap/Terang

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami cara mengelola tema terpusat menggunakan variabel CSS secara mendalam.
* Menerapkan selektor atribut `[data-theme="dark"]` untuk mendefinisikan skema warna Mode Gelap (Dark Mode).
* Merancang desain visual yang adaptif, kontras, dan ramah mata pada kondisi pencahayaan rendah.
* Kustomisasi tombol Toggle Mode Gelap pada bagian navigasi halaman website Pesantren Minhajul Haq.

---

## 2. Mengapa Mode Gelap Sangat Penting?
Saat ini, fitur **Mode Gelap (Dark Mode)** telah menjadi standar kelayakan visual untuk aplikasi dan website premium.
* **Kenyamanan Pengguna**: Mengurangi ketegangan mata saat membaca konten di malam hari atau ruangan gelap.
* **Efisiensi Baterai**: Menghemat konsumsi daya baterai pada perangkat berlayar OLED/AMOLED.
* **Estetika Premium**: Memberikan kesan modern, futuristik, dan eksklusif.

---

## 3. Strategi Pewarnaan Kontras Tema
Kunci dari pembuatan mode gelap yang baik adalah menghindari warna hitam pekat (`#000000`) dan putih pekat (`#ffffff`) yang terlalu kontras. Kita sebaiknya menggunakan variasi warna gelap kecokelatan atau abu-abu gelap agar transisi visual terasa lembut dan alami.

Pada proyek pesantren kita, kita menetapkan pemetaan warna sebagai berikut:

| Nama Variabel | Kondisi Mode Terang (Default) | Kondisi Mode Gelap |
| :--- | :--- | :--- |
| `--bg-primary` | `#fdfbf7` (Cream lembut) | `#120907` (Cokelat gelap pekat) |
| `--bg-secondary` | `#f4efea` (Cream abu-abu) | `#1a0e0b` (Cokelat gelap medium) |
| `--bg-card` | `#ffffff` (Putih bersih) | `#1f120e` (Cokelat gelap kartu) |
| `--text-primary` | `#2a1a16` (Cokelat-hitam pekat) | `#fdfbf7` (Cream lembut) |
| `--text-secondary`| `#6e5650` (Cokelat abu-abu) | `#cbbab6` (Abu-abu terang) |

---

## 4. Cara Kerja Selektor Atribut Tema
Untuk menerapkan tema, kita memanfaatkan atribut khusus bernama `data-theme` pada tag teratas dokumen (`<html>`).
* **Saat Mode Terang**: `<html data-theme="light">` (atau tanpa data-theme).
* **Saat Mode Gelap**: `<html data-theme="dark">`.

Di file CSS, kita menumpuk nilai variabel asli di blok `:root` dengan nilai baru di blok `[data-theme="dark"]`:
```css
/* Nilai Variabel Awal (Mode Terang) */
:root {
  --bg-primary: #fdfbf7;
  --text-primary: #2a1a16;
}

/* Penumpukan Nilai Baru ketika atribut data-theme="dark" aktif */
[data-theme="dark"] {
  --bg-primary: #120907;
  --text-primary: #fdfbf7;
}
```
Karena seluruh elemen (seperti `body`, `.program-card`, dsb) diwarnai menggunakan fungsi variabel `var()`, maka saat atribut `data-theme` berubah, seluruh warna website akan ikut berubah secara otomatis dan instan!

---

## 5. Latihan Praktik Pertemuan 10 (Progres Berkas Proyek)

### Instruksi:
1. Periksa berkas `index.html` dan `style.css` pada folder `pertemuan10/`.
2. Buka berkas `index.html`. Perhatikan pada bagian navbar di dalam `<header>`, kita telah menambahkan elemen tombol baru untuk memicu perpindahan tema:
   ```html
   <button class="theme-toggle" id="themeToggleBtn" aria-label="Toggle Dark Mode">
     <i class="fa-solid fa-moon"></i>
     <i class="fa-solid fa-sun"></i>
   </button>
   ```
3. Buka berkas `style.css`.
   * Perhatikan deklarasi variabel ganda di blok `:root` dan blok `[data-theme="dark"]`.
   * Perhatikan baris kode di bawah komentar pembatas `/* ============ MATERI PERTEMUAN 10 ============ */` yang menghias tombol `#themeToggleBtn` agar berbentuk bundar dan berganti ikon bulan/matahari secara otomatis.
4. Jalankan `index.html` di browser Anda.
5. **Eksperimen Manual**: Karena kita belum mempelajari JavaScript untuk mendeteksi klik tombol (akan dibahas di Pertemuan 13), kita bisa menguji Mode Gelap ini secara manual:
   * Buka kode editor Anda, cari tag pembuka `<html>` di baris ke-2 berkas `index.html`.
   * Ubah menjadi `<html lang="id" data-theme="dark">`. Simpan file.
   * Segarkan (refresh) halaman browser Anda.
   * **Amati**: Seluruh website sekarang berubah menjadi tema gelap yang anggun dan berkelas!
6. **Tantangan Mandiri**: Kembalikan tag `<html>` ke posisi awal. Tambahkan properti transisi `transition: background-color 0.3s ease, color 0.3s ease;` pada selektor `*` di file `style.css` agar saat perpindahan tema nanti terjadi, perubahan warna berjalan lembut (fade) dan tidak mengejutkan mata.
