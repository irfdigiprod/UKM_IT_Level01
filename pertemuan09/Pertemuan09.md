# Pertemuan 9: Grid Layouting (Card Program & Fasilitas)

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami konsep dasar CSS *Grid Layout* untuk menata letak elemen dalam dua dimensi (baris dan kolom sekaligus).
* Menjelaskan kegunaan satuan pecahan baru `fr` (*fraction*).
* Menerapkan teknik grid responsif otomatis tanpa *media query* menggunakan fungsi `repeat(auto-fit, minmax())`.
* Merancang desain tata letak kartu Program Pendidikan dan kartu Fasilitas Pesantren secara rapi, simetris, dan menarik.

---

## 2. Mengapa Memakai CSS Grid?
Jika Flexbox sangat andal dalam menangani tata letak satu dimensi (baris saja atau kolom saja), maka **CSS Grid** adalah raja penataan letak dua dimensi (mengatur posisi kolom dan baris secara bersamaan).

Dengan CSS Grid, kita dapat membuat tata letak papan catur, susunan galeri gambar, atau grid kartu informasi produk/kegiatan secara mudah dan presisi, serta mempertahankan responsivitas di berbagai ukuran layar perangkat.

---

## 3. Aturan Main CSS Grid & Properti Utama
Untuk mengaktifkan sistem grid, kita cukup mendeklarasikan properti `display: grid` pada kontainer induk.

### A. Menentukan Kolom (`grid-template-columns`)
Properti ini digunakan untuk membagi lebar kontainer menjadi beberapa lajur kolom.
* Contoh manual 3 kolom sama rata:
  ```css
  grid-template-columns: 200px 200px 200px;
  ```
* Menggunakan pecahan **`fr`** (*Fraction* / sisa bagian ruang):
  ```css
  grid-template-columns: 1fr 1fr 1fr; /* Membagi layar menjadi 3 kolom sama lebar secara proporsional */
  ```
* Menggunakan fungsi **`repeat()`**:
  ```css
  grid-template-columns: repeat(3, 1fr); /* Sama seperti penulisan 1fr sebanyak 3 kali */
  ```

### B. Membuat Grid Responsif Otomatis (`auto-fit` & `minmax`)
Teknik ini adalah teknik paling populer di web modern untuk membuat kartu responsif tanpa perlu menulis puluhan media query.
```css
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
```
* **`minmax(280px, 1fr)`**: Ukuran kolom minimal adalah 280px. Jika ada sisa ruang lebih lebar, maka ukurannya akan membesar mengisi sisa ruang secara merata (`1fr`).
* **`auto-fit`**: Browser akan otomatis menghitung jumlah kolom yang muat diposisikan berdampingan dalam satu baris. Jika lebar layar menyusut (misalnya di ponsel layar kecil), kolom yang tidak muat akan otomatis jatuh ke bawah membentuk baris baru secara dinamis.

---

## 4. Bedah Progres Kode Proyek (Grid Kartu)
Perhatikan bagian implementasi CSS Grid pada berkas `style.css` untuk bagian Program Pendidikan dan Fasilitas Pesantren:

```css
/* Kontainer Induk Grid Program */
.program-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px; /* Celah antar kartu sebesar 30px */
}

/* Desain Kartu Program */
.program-card {
  background-color: var(--bg-card); /* Latar kartu putih bersih */
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-md); /* Bayangan lembut */
  border: 1px solid var(--border-color); /* Garis batas tipis */
  display: flex;
  flex-direction: column; /* Isi kartu ditumpuk ke bawah */
  padding: 30px;
}
```

---

## 5. Latihan Praktik Pertemuan 9 (Progres Berkas Proyek)

### Instruksi:
1. Periksa berkas `index.html` dan `style.css` di dalam folder `pertemuan09/`.
2. Jalankan `index.html` di browser Anda.
   * **Amati**: Kartu-kartu di section "Program Pendidikan" dan "Fasilitas Pesantren" kini tersusun simetris dan rapi secara horizontal menjadi kolom-kolom berdampingan.
   * Cobalah perkecil ukuran window browser Anda (buat menjadi sempit secara perlahan). Perhatikan bagaimana kartu yang tadinya berjejer 3 kolom otomatis berubah menjadi 2 kolom, dan saat layar sangat sempit (seperti HP) akan melipat rapi menjadi 1 kolom memanjang ke bawah.
3. Buka file `style.css`, perhatikan bagian komentar pembatas baru `/* ============ MATERI PERTEMUAN 9 ============ */` dan amati properti dekorasi kartu.
4. **Tantangan Mandiri**: Di bagian CSS Pertemuan 9, ubah ukuran `minmax(280px, 1fr)` pada selektor `.facilities-grid` menjadi `minmax(180px, 1fr)`. Segarkan browser dan amati bagaimana susunan kolom fasilitas berubah ketika ukuran minimal kolom diperkecil.
