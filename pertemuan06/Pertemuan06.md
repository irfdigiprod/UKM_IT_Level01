# Pertemuan 6: Tipografi & Sistem Pewarnaan Kustom

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami cara mengimpor web font pihak ketiga dari Google Fonts menggunakan `@import`.
* Menjelaskan properti kontrol tipografi pada CSS (`font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`).
* Memahami sistem penulisan warna di CSS (Hex, RGB, RGBA).
* Membuat deklarasi variabel warna kustom untuk identitas warna Pesantren Minhajul Haq (Primary: `#602515`, Secondary: `#f8ae19`).

---

## 2. Mengimpor Huruf dengan Google Fonts
Menggunakan font bawaan komputer seperti `Arial` atau `Times New Roman` dapat membuat website terlihat kaku dan generic. Web modern menggunakan layanan web font untuk menyajikan font kustom yang premium.

Salah satu cara termudah adalah menggunakan layanan gratis **Google Fonts**. Pada proyek Pesantren Minhajul Haq, kita menggunakan font **Plus Jakarta Sans** yang memiliki kesan modern, bersih, dan berwibawa.

Untuk mengimpor font ini ke berkas CSS, kita menempatkan aturan `@import` di baris paling pertama berkas `style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
```

Setelah diimpor, kita menerapkannya pada selektor `body` agar seluruh teks mewarisi huruf tersebut:
```css
body {
  font-family: 'Plus Jakarta Sans', sans-serif;
}
```
*Tanda koma `, sans-serif` berfungsi sebagai font cadangan (fallback). Jika server Google Fonts gagal dimuat, browser akan otomatis menampilkan font berjenis sans-serif bawaan komputer pengguna.*

---

## 3. Properti Pengaturan Tipografi
Beberapa properti CSS yang sering digunakan untuk mengatur tampilan tulisan:
1. **`font-size`**: Mengatur ukuran teks (contoh: `2rem`, `16px`).
2. **`font-weight`**: Mengatur ketebalan huruf (contoh: `700` untuk tebal, `400` untuk normal, `300` untuk tipis).
3. **`line-height`**: Mengatur jarak vertikal antarbaris tulisan (misalnya `1.6` agar paragraf lebih nyaman dibaca dan tidak bertumpuk).
4. **`letter-spacing`**: Mengatur jarak antarhuruf secara horizontal (contoh: `2px`).

---

## 4. Sistem Pewarnaan CSS & Identitas Brand
Ada beberapa cara menuliskan warna pada properti CSS:
* **Nama Warna**: `red`, `blue`, `black` (sangat terbatas).
* **Kode Hexadecimal**: Diawali tanda pagar `#` diikuti 6 karakter angka/huruf kombinasi (contoh: `#602515` untuk merah maroon tua, dan `#f8ae19` untuk warna emas). Ini adalah metode paling populer untuk memetakan palet warna brand.
* **RGBA**: Menentukan tingkat percampuran warna primer komputer (*Red, Green, Blue*) serta tingkat transparansi (*Alpha*) dari angka `0` (transparan penuh) hingga `1` (solid).
  * Contoh: `rgba(96, 37, 21, 0.1)` menghasilkan warna maroon transparan 10% untuk background kartu.

---

## 5. Menerapkan Variabel CSS (CSS Variables)
Agar warna brand mudah dikelola dan tidak perlu ditulis ulang ratusan kali, kita membuat variabel kustom di dalam selektor khusus `:root` (ruang lingkup global):

```css
:root {
  --primary: #602515;
  --secondary: #f8ae19;
  --bg-primary: #fdfbf7;
}
```

Ketika ingin memanggil warna tersebut, kita gunakan fungsi `var()`:
```css
h1 {
  color: var(--primary); /* Menggunakan warna maroon #602515 */
}
```

---

## 6. Latihan Praktik Pertemuan 6 (Progres Berkas Proyek)

### Instruksi:
1. Periksa berkas `index.html` dan `style.css` pada folder `pertemuan06/`.
2. Buka berkas `style.css`. Perhatikan baris paling atas di mana kita mengimpor *Plus Jakarta Sans* dari Google Fonts.
3. Lihat deklarasi variabel warna di dalam blok `:root`.
4. Jalankan `index.html` di browser Anda.
   * **Amati**: Seluruh tulisan di halaman web sekarang berubah bentuk menjadi font *Plus Jakarta Sans* yang ramping dan modern.
   * Judul utama dan tombol-tombol telah terwarnai secara konsisten menggunakan warna maroon utama (`#602515`) dan warna emas sekunder (`#f8ae19`).
5. **Tantangan Mandiri**: Di dalam file `style.css` pada bagian `:root`, buatlah variabel warna baru bernama `--accent` dengan nilai warna hijau Islami (`#2e7d32`). Gunakan variabel tersebut untuk mengubah warna tulisan tag kutipan pimpinan (`.leader-quote`).
