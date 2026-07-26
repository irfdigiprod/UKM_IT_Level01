# Pertemuan 5: Pengenalan CSS & Selektor Dasar

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami fungsi dan cara kerja CSS (*Cascading Style Sheets*).
* Menjelaskan 3 metode menghubungkan berkas CSS ke HTML.
* Menuliskan aturan penulisan (sintaksis) dasar CSS.
* Menerapkan selektor dasar (Elemen, Kelas, ID, Universal) untuk menyeleksi dan menghias elemen HTML.
* Menghubungkan berkas proyek `index.html` dengan berkas stylesheet eksternal `style.css` serta menerapkan *CSS Reset* dasar.

---

## 2. Apa itu CSS?
Jika HTML bertugas membangun struktur organ dan tulang website, maka **CSS (Cascading Style Sheets)** adalah kulit, wajah, dan pakaian yang memberikan penampilan estetis. Dengan CSS, kita dapat mengatur warna teks, latar belakang halaman, tata letak elemen, jenis huruf, hingga animasi.

---

## 3. Tiga Cara Menghubungkan CSS
Ada tiga cara untuk menyisipkan gaya CSS ke dalam halaman web:

### A. Inline CSS
Gaya ditulis langsung di dalam tag HTML menggunakan atribut `style`.
* *Kelemahan*: Sulit dikelola jika halaman web berukuran besar.
* *Contoh*:
  ```html
  <h1 style="color: red; font-size: 20px;">Judul Merah</h1>
  ```

### B. Internal CSS
Gaya ditulis di dalam satu file HTML yang sama, dibungkus di dalam tag `<style>` yang diletakkan di bagian `<head>`.
* *Kelemahan*: Gaya hanya berlaku untuk satu halaman HTML tersebut saja.
* *Contoh*:
  ```html
  <head>
    <style>
      body { background-color: lightyellow; }
    </style>
  </head>
  ```

### C. External CSS (Sangat Direkomendasikan)
Gaya ditulis di file terpisah dengan ekstensi `.css`, lalu dihubungkan ke file HTML menggunakan tag `<link>`.
* *Kelebihan*: File CSS yang sama dapat digunakan oleh ratusan halaman HTML sekaligus. Perubahan di satu file CSS akan mengubah tampilan seluruh website secara instan.
* *Contoh menghubungkan*:
  ```html
  <link rel="stylesheet" href="style.css">
  ```

---

## 4. Sintaksis & Selektor Dasar CSS
Penulisan CSS terdiri dari sepasang **Selektor (Selector)** dan **Deklarasi (Declaration block)**.

```css
selector {
  property: value;
  property: value;
}
```
* **Selector**: Menentukan elemen HTML mana yang ingin kita hias.
* **Property**: Jenis gaya yang ingin diubah (contoh: `color`, `background-color`, `font-size`).
* **Value**: Nilai dari gaya tersebut (contoh: `blue`, `16px`).

### Jenis Selektor Utama:
1. **Selektor Universal (`*`)**: Menyeleksi semua elemen tanpa terkecuali pada halaman web. Sering digunakan untuk melakukan reset margin browser bawaan.
   ```css
   * { margin: 0; padding: 0; }
   ```
2. **Selektor Elemen / Tag**: Menyeleksi semua elemen HTML yang memiliki nama tag yang sama.
   ```css
   p { color: #333; } /* Menghias semua paragraf */
   ```
3. **Selektor Kelas / Class Selector (`.`)**: Menyeleksi semua elemen yang memiliki atribut class yang sesuai. Ditandai dengan tanda titik (`.`) di awal nama kelas. Dapat digunakan berulang kali pada banyak elemen.
   ```css
   .btn { font-weight: bold; } /* Menghias semua elemen dengan class="btn" */
   ```
4. **Selektor ID (`#`)**: Menyeleksi satu elemen unik yang memiliki atribut ID yang sesuai. Ditandai dengan tanda pagar (`#`). Hanya boleh ada satu ID unik per halaman.
   ```css
   #beranda { background-color: #602515; } /* Menghias section beranda */
   ```

---

## 5. CSS Reset & Box-Sizing
Secara bawaan (*default*), browser seperti Google Chrome, Safari, dan Firefox memberikan sedikit margin, padding, dan ukuran border kustom pada elemen HTML. Akibatnya, tampilan website bisa berbeda-beda di setiap browser.

Untuk mencegah masalah ini, kita menerapkan teknik **CSS Reset** di baris awal berkas stylesheet proyek kita:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```
* **`box-sizing: border-box`**: Properti ini sangat penting agar saat kita mengatur lebar elemen, nilai padding dan border tidak menambah ukuran total lebar fisik elemen tersebut. Ini memudahkan penataan tata letak (*layouting*) tanpa salah perhitungan piksel.

---

## 6. Latihan Praktik Pertemuan 5 (Progres Berkas Proyek)

### Instruksi:
1. Periksa berkas `index.html` dan berkas baru bernama `style.css` di dalam folder `pertemuan05/`.
2. Perhatikan pada berkas `index.html` baris 11, kita telah menghubungkan halaman ke file CSS eksternal:
   ```html
   <link rel="stylesheet" href="style.css">
   ```
3. Buka file `style.css` dan perhatikan bagaimana kita menulis aturan reset universal (`*`), warna latar belakang dasar halaman (`body`), dan dekorasi tombol kelas `.btn` menggunakan selektor kelas.
4. Buka `index.html` di browser Anda. Bandingkan dengan Pertemuan 4: teks di halaman web sekarang menempel rapat ke pinggir (karena margin reset bawaan browser diatur ke `0`), font berubah ke sans-serif bawaan browser, dan tautan tombol sudah mulai memiliki bentuk kotak.
5. **Tantangan Mandiri**: Di dalam file `style.css`, tambahkan selektor elemen untuk judul tingkat dua (`h2`) dan atur agar warna teksnya berubah menjadi maroon (`#602515`).
