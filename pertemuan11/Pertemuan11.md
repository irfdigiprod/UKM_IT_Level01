# Pertemuan 11: Animasi Transisi & Transformasi CSS

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami cara kerja dan sintaksis properti `transition` (`property`, `duration`, `timing-function`).
* Menggunakan properti `transform` untuk memanipulasi posisi, ukuran, dan rotasi elemen (2D).
* Mendefinisikan dan menerapkan animasi kustom menggunakan aturan `@keyframes`.
* Merancang animasi masuk konten (*fade-in-up*) pada bagian Hero Banner dan efek zoom interaktif pada kartu fasilitas website Pesantren Minhajul Haq.

---

## 2. Memahami Properti Transition
Properti `transition` digunakan untuk mengubah nilai properti CSS lainnya (seperti warna latar belakang, ukuran border, dsb) secara perlahan dan halus selama durasi waktu tertentu, bukan berubah secara patah dan kaku.

Sintaksis lengkap:
```css
transition: property duration timing-function delay;
```
* **`property`**: Nama properti yang akan diberi efek transisi (contoh: `background-color`, `transform`, `all` untuk semua).
* **`duration`**: Berapa lama transisi berlangsung (contoh: `0.3s` atau `300ms`).
* **`timing-function`**: Kecepatan transisi dari awal hingga akhir (contoh: `ease`, `linear`, atau fungsi kustom `cubic-bezier(0.4, 0, 0.2, 1)` untuk gerakan elastis premium).

---

## 3. Kekuatan CSS Transform (Manipulasi Elemen)
Properti `transform` memungkinkan kita mengubah bentuk dan posisi elemen secara visual tanpa merusak tata letak elemen di sekelilingnya.

Beberapa nilai manipulasi yang populer:
1. **`translateY(nilai)` / `translateX(nilai)`**: Menggeser elemen secara vertikal atau horizontal.
   * Contoh: `transform: translateY(-8px)` menggeser kartu ke atas sejauh 8 piksel (sering dipakai saat hover).
2. **`scale(nilai)`**: Mengubah ukuran skala elemen (membesar atau mengecil).
   * Contoh: `scale(1.05)` membesarkan elemen sebanyak 5% dari ukuran aslinya.
3. **`rotate(nilai_derajat)`**: Memutar elemen searah atau berlawanan jarum jam.
   * Contoh: `rotate(5deg)` memutar elemen sebesar 5 derajat ke kanan.

Kita dapat menggabungkan beberapa fungsi sekaligus dalam satu baris:
```css
transform: scale(1.05) rotate(2deg);
```

---

## 4. Animasi Kustom dengan `@keyframes`
Untuk membuat gerakan yang lebih kompleks yang berjalan otomatis saat halaman dimuat (seperti teks meluncur naik), kita menggunakan **CSS Keyframes Animation**.

Langkah-langkah pembuatan:
1. **Mendefinisikan Gerakan** dengan aturan `@keyframes` dan berikan nama animasi:
   ```css
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
2. **Menerapkan Animasi** pada elemen target menggunakan properti `animation`:
   ```css
   .hero-content {
     animation: fadeInUp 1s ease-out;
   }
   ```

---

## 5. Latihan Praktik Pertemuan 11 (Progres Berkas Proyek)

### Instruksi:
1. Periksa berkas `index.html` dan `style.css` pada folder `pertemuan11/`.
2. Buka berkas `index.html`. Perhatikan pada bagian pembungkus tulisan Hero, kita telah membungkusnya dengan kelas `.hero-content`:
   ```html
   <div class="hero-content">
     <span>Penerimaan Santri Baru ...</span>
     <h1 class="hero-title">...</h1>
   </div>
   ```
3. Buka berkas `style.css` bagian Pertemuan 11.
   * Perhatikan penulisan kode `@keyframes fadeInUp`.
   * Perhatikan efek hover baru pada kartu fasilitas `.facility-card:hover` yang menggunakan kombinasi `transform: translateY(-5px)` agar melayang lembut.
4. Jalankan `index.html` di browser Anda.
   * **Amati**: Saat halaman pertama kali dimuat atau disegarkan, teks utama pada bagian Hero (pembuka) akan meluncur perlahan naik dari bawah ke atas secara estetik.
   * Arahkan kursor ke kartu-kartu Fasilitas Pesantren. Kartu akan melayang naik lembut secara perlahan.
5. **Tantangan Mandiri**: Di dalam berkas `style.css` bagian Pertemuan 11, buatlah sebuah animasi keyframes kustom bernama `@keyframes fadeInRight` (meluncur dari kanan ke kiri menggunakan `translateX`). Terapkan animasi tersebut pada tombol aksi utama pendaftaran agar tombol meluncur masuk secara menarik.
