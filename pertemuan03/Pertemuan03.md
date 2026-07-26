# Pertemuan 3: Hyperlink, List, dan Navigasi Halaman

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami sintaksis dan kegunaan tag list ordered (`<ol>`) dan unordered (`<ul>`) serta item list (`<li>`).
* Menjelaskan anatomi tag tautan (`<a>`) dan cara kerja atribut `href`.
* Membangun sistem menu navigasi *internal link* (tautan dalam halaman) dan *external link* (tautan luar) pada website Pesantren Minhajul Haq.

---

## 2. Mengenal Elemen List (Daftar)
Daftar atau list digunakan untuk menyajikan informasi secara berurutan atau poin-poin. Di HTML, terdapat dua jenis list utama:

### A. Unordered List (Daftar Tanpa Nomor)
Digunakan untuk item-item yang urutannya tidak mutlak (poin-poin/bullet).
* **Tag**: Dibungkus dengan `<ul>` dan setiap baris di dalamnya dibungkus dengan `<li>` (List Item).
* **Contoh**:
  ```html
  <ul>
    <li>Program Tahfidz</li>
    <li>Program Madrasah</li>
  </ul>
  ```

### B. Ordered List (Daftar Berurutan/Bernomor)
Digunakan jika urutan langkah atau rangking itu penting.
* **Tag**: Dibungkus dengan `<ol>` dan tiap item dibungkus dengan `<li>`.
* **Contoh**:
  ```html
  <ol>
    <li>Langkah 1: Isi formulir</li>
    <li>Langkah 2: Tes wawancara</li>
  </ol>
  ```

---

## 3. Membuat Tautan / Hyperlink (`<a>`)
Tautan adalah ruh dari Word Wide Web (WWW). Ia menghubungkan satu halaman web ke halaman web lain atau bagian tertentu di halaman yang sama.
* **Tag**: `<a>` (Anchor)
* **Atribut Wajib**: `href` (Hypertext Reference) - Menentukan lokasi alamat tujuan link.

```html
<a href="https://google.com">Buka Google</a>
```

### Tipe-Tipe Nilai Atribut `href`:
1. **URL Lengkap (Absolut)**: Untuk menunjuk ke website eksternal lain.
   * Contoh: `href="https://cdnjs.cloudflare.com"`
2. **Path Berkas Lokal (Relatif)**: Untuk berpindah ke file HTML lain di folder komputer kita.
   * Contoh: `href="profil.html"` atau `href="pertemuan01/latihan01.html"`
3. **Internal Anchor (ID Link)**: Untuk melompat ke bagian tertentu di halaman yang sama.
   * Format: Menggunakan tanda pagar `#` diikuti dengan nilai atribut `id` dari elemen target.
   * Contoh: `<a href="#profil">` akan mengarahkan browser melompat langsung ke elemen `<section id="profil">`.

---

## 4. Bedah Progres Kode Proyek
Dalam pertemuan ini, kita meningkatkan berkas proyek `index.html` dari Pertemuan 2 dengan mengimplementasikan menu navigasi riil di dalam header, list pada bagian profil (misi), dan struktur link di bagian kaki halaman (footer).

Perhatikan perubahan struktur navbar pada berkas proyek:
```html
<nav>
  <!-- Menghubungkan navigasi menggunakan Unordered List & Anchor internal -->
  <ul class="nav-menu">
    <li><a href="#beranda" class="nav-link active">Beranda</a></li>
    <li><a href="#profil" class="nav-link">Profil</a></li>
    <li><a href="#program" class="nav-link">Program</a></li>
    <li><a href="#fasilitas" class="nav-link">Fasilitas</a></li>
    <li><a href="#kontak" class="nav-link">Kontak</a></li>
  </ul>
</nav>
```

Pada bagian Misi di Profil, kita mengganti paragraf biasa menjadi list terstruktur:
```html
<ul class="mission-list">
  <li>Menyelenggarakan program Tahfidzul Qur'an 30 Juz secara mutqin.</li>
  <li>Mengajarkan ilmu-ilmu syar'i dan bahasa Arab secara intensif.</li>
  <li>Mengintegrasikan kurikulum pesantren dengan kurikulum nasional.</li>
</ul>
```

---

## 5. Latihan Praktik Pertemuan 3 (Progres Berkas Proyek)

### Instruksi:
1. Buka berkas `index.html` di dalam folder `pertemuan03/` ini menggunakan kode editor Anda.
2. Perhatikan bagaimana teks menu navigasi pada Pertemuan 2 kini telah diubah menjadi struktur list tautan (`<ul>` -> `<li>` -> `<a>`).
3. Jalankan berkas tersebut di browser, dan cobalah klik menu "Profil", "Program", "Fasilitas", atau "Kontak" pada bagian atas layar.
   * **Amati**: Browser akan langsung menggulir (scroll) layar ke section target secara otomatis! Inilah kekuatan dari **Internal Anchor Link**.
4. Perhatikan bagian Footer. Terdapat menu tautan pintas dan sosial media yang kini sudah terstruktur rapi menggunakan tag `<ul>` dan `<a>`.
5. **Tantangan Mandiri**: Di dalam `<section id="fasilitas">`, ubah paragraf deskripsi fasilitas menjadi daftar berurutan (`<ol>`) untuk meranking 3 fasilitas teratas paling favorit di Pesantren Minhajul Haq.
