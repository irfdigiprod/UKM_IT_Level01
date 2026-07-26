# Pertemuan 2: Struktur Semantik HTML5

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Menjelaskan perbedaan elemen semantik dan non-semantik dalam HTML5.
* Menyebutkan dan menjelaskan fungsi tag semantik layout (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
* Merancang kerangka dasar (*skeleton structure*) website Pesantren Minhajul Haq secara terstruktur menggunakan HTML semantik.

---

## 2. Mengapa Memakai Elemen Semantik?
Pada era HTML versi lama, developer web membagi tata letak halaman dengan membungkus elemen secara bebas menggunakan tag `<div>` (singkatan dari *division* / pembagi) seperti ini:
```html
<div class="header">...</div>
<div class="nav-links">...</div>
<div class="main-content">...</div>
<div class="footer-area">...</div>
```
Tag `<div>` adalah elemen **non-semantik** (tidak bermakna). Artinya, tag tersebut tidak menjelaskan kepada mesin pencari atau browser mengenai apa isi di dalamnya; ia hanya berfungsi sebagai wadah kotak kosong biasa.

Pada standar **HTML5**, diperkenalkanlah elemen **Semantik** (bermakna). Elemen ini didesain secara khusus untuk mendeskripsikan tujuan kegunaannya secara jelas:
* **Mesin Pencari (SEO Google)**: Lebih mudah mengindeks konten penting pesantren (misal bagian Visi-Misi atau Program Studi).
* **Pembaca Layar (Screen Readers)**: Memudahkan tunanetra melompati navigasi langsung ke konten utama.
* **Keterbacaan Kode**: Developer lain dapat membaca dan memelihara struktur web dengan jauh lebih cepat.

---

## 3. Jenis Tag Semantik Layout
Berikut adalah tag tata letak utama yang akan kita gunakan untuk membangun struktur website Pesantren Minhajul Haq:

1. **`<header>`**: Digunakan untuk menampung konten pengantar atau bagian kepala situs. Biasanya berisi logo, nama instansi, menu navigasi, dan tombol aksi utama.
2. **`<nav>`**: Mendefinisikan blok menu navigasi halaman. Semua daftar tautan menu utama web harus dibungkus di dalam tag `<nav>`.
3. **`<main>`**: Menampung konten utama yang unik dan paling penting dari halaman tersebut. Hanya boleh ada **satu** tag `<main>` dalam satu dokumen.
4. **`<section>`**: Membagi halaman menjadi bagian-bagian (bab/wilayah) yang memiliki topik pembahasan tersendiri.
   * Contoh pada web pesantren kita: section profil, section program pendidikan, section fasilitas, dan section kontak.
5. **`<footer>`**: Diletakkan di bagian terbawah halaman. Biasanya berisi informasi hak cipta (copyright), link media sosial, alamat instansi, dan tautan pintas.

---

## 4. Bedah Arsitektur Kerangka Proyek (Skeleton)
Mari kita lihat kerangka kosong (skeleton) website Pesantren Minhajul Haq yang menggunakan tag semantik secara penuh. Di sini kita membuat struktur tulangan tanpa hiasan CSS terlebih dahulu:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pesantren Minhajul Haq - Membentuk Generasi Qur'ani & Unggul</title>
</head>
<body>

  <!-- Bagian Kepala / Header & Navigasi -->
  <header>
    <nav>
      <!-- Area Logo & Menu Navigasi -->
    </nav>
  </header>

  <!-- Konten Utama Halaman -->
  <main>
    <!-- Bagian 1: Beranda / Hero Banner -->
    <section id="beranda">
      <!-- Judul utama website -->
    </section>

    <!-- Bagian 2: Profil & Visi Misi -->
    <section id="profil">
      <!-- Sambutan Pimpinan & Visi Misi -->
    </section>

    <!-- Bagian 3: Program Pendidikan -->
    <section id="program">
      <!-- Program MTs, MA, Tahfidz -->
    </section>

    <!-- Bagian 4: Fasilitas Pesantren -->
    <section id="fasilitas">
      <!-- Sarana Prasarana -->
    </section>

    <!-- Bagian 5: Kontak & Lokasi -->
    <section id="kontak">
      <!-- Formulir kontak & Alamat -->
    </section>
  </main>

  <!-- Bagian Kaki / Footer Halaman -->
  <footer>
    <!-- Hak Cipta & Info Sosial Media -->
  </footer>

</body>
</html>
```

---

## 5. Latihan Praktik Pertemuan 2 (Progres Berkas Proyek)

Pada latihan ini, kita akan membangun struktur teks mentah website Pesantren Minhajul Haq berdasarkan kerangka semantik di atas.

### Instruksi:
1. Buka berkas `index.html` yang ada di dalam folder `pertemuan02/` ini.
2. Pelajari bagaimana struktur tag semantik disusun untuk menampung teks mentah website.
3. Coba jalankan berkas tersebut di browser Anda. Anda akan melihat bahwa website terlihat sangat polos, lurus ke bawah, tanpa warna, dan navigasinya belum rapi. Hal ini wajar karena kita **belum menambahkan gaya (CSS)**. Ini membuktikan bahwa HTML murni bertugas menyusun **informasi dan konten**, bukan estetika.
4. **Tantangan Mandiri**: Di dalam `<section id="profil">`, coba tambahkan tag `<h3>` baru berisi "Sejarah Singkat Pesantren" dan isi dengan paragraf singkat buatan Anda sendiri menggunakan tag `<p>`.
