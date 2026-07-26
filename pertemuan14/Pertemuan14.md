# Pertemuan 14: Logika Tab Filter Program Pendidikan

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami kegunaan kustom atribut dataset HTML5 (`data-*`).
* Menyeleksi dan memanipulasi kelompok elemen menggunakan perulangan `.forEach()`.
* Merancang logika penyaringan (filter) data di sisi klien (*client-side filtering*) tanpa memuat ulang halaman (*page reload*).
* Menyusun kode filter tab kategori program studi pada website Pesantren Minhajul Haq lengkap dengan animasi transisi yang mulus.

---

## 2. Mengenal Kustom Atribut Dataset (`data-*`)
Dalam pembuatan aplikasi web modern, sering kali kita perlu menitipkan informasi atau metadata tambahan pada elemen HTML yang nantinya akan dibaca oleh JavaScript. HTML5 menyediakan fitur ini melalui atribut **`data-*`**.

* **Sintaksis**: `data-namaAtribut="nilai"`
* **Contoh di HTML**:
  ```html
  <button class="filter-btn" data-filter="formal">Formal</button>
  <div class="program-card" data-category="formal">...</div>
  ```
* **Cara membaca di JavaScript**:
  Atribut ini dapat dibaca menggunakan properti `.getAttribute('data-filter')` atau `.dataset.filter`.

---

## 3. Logika Algoritma Penyaringan (Filtering)
Tujuan kita adalah: ketika tombol kategori "Pendidikan Formal" diklik, kartu program "Tahfidz" akan menghilang secara visual, dan kartu program "MTs" & "MA" tetap tampil.

### Alur Algoritma:
1. Pengguna mengklik tombol filter kategori (misalnya tombol dengan `data-filter="formal"`).
2. JavaScript menghapus kelas `.active` dari tombol filter lama dan menambahkannya ke tombol yang diklik.
3. JavaScript membaca nilai filter (`formal`).
4. JavaScript melakukan perulangan (*looping*) memeriksa setiap kartu program:
   - Ambil nilai kategori kartu (`data-category`).
   - Jika nilai filter adalah `'all'` (Semua) ATAU kategori kartu **sama** dengan nilai filter, maka **tampilkan kartu**.
   - Jika tidak cocok, maka **sembunyikan kartu** (`display: none`).

---

## 4. Menambahkan Animasi Transisi Filter
Agar proses penghilangan dan kemunculan kartu tidak terasa patah atau kaget, kita menyisipkan perubahan opacity dan transformasi skala menggunakan waktu tunda (`setTimeout`) di JavaScript:

```javascript
programCards.forEach(card => {
  // A. Berikan animasi mengecil dan memudar keluar (Fade-Out)
  card.style.opacity = '0';
  card.style.transform = 'scale(0.9) translateY(10px)';
  
  // B. Tunggu animasi fade-out selesai (300 milidetik)
  setTimeout(() => {
    const category = card.getAttribute('data-category');
    
    if (filterValue === 'all' || category === filterValue) {
      card.style.display = 'flex'; // Tampilkan elemen di HTML
      
      // Berikan jeda mikro agar browser merender display terlebih dahulu sebelum memicu transisi masuk
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'scale(1) translateY(0)'; // Fade-In
      }, 50);
    } else {
      card.style.display = 'none'; // Sembunyikan elemen
    }
  }, 300);
});
```

---

## 5. Latihan Praktik Pertemuan 14 (Progres Berkas Proyek)

### Instruksi:
1. Periksa berkas `index.html`, `style.css`, dan `app.js` pada folder `pertemuan14/`.
2. Buka berkas `index.html` dan perhatikan penambahan baris blok tombol filter dan penempatan atribut kategori pada kartu program:
   ```html
   <div class="program-filter">
     <button class="filter-btn active" data-filter="all">Semua Program</button>
     ...
   </div>
   ```
3. Buka berkas `app.js` dan pelajari logika filter di bawah komentar pembatas `/* ============ MATERI PERTEMUAN 14 ============ */`.
4. Jalankan `index.html` di browser Anda, gulir ke section "Program Pendidikan".
   * **Amati**: Tombol-tombol tab filter di atas kartu program kini **aktif 100%**.
   * Klik tombol "Pendidikan Formal". Kartu program Tahfidz akan memudar mengecil lalu menghilang secara estetis, menyisakan kartu MTs & MA.
   * Klik "Tahfidz & Diniyah". Kartu MA & MTs akan memudar menghilang, digantikan oleh kartu Tahfidz yang meluncur masuk secara premium.
5. **Tantangan Mandiri**: Di file `index.html`, buatlah sebuah kartu program pendidikan baru keempat, misalnya "Kajian Kitab Kuning". Berikan atribut `data-category="tahfidz"` agar kartu baru tersebut otomatis terhitung masuk saat filter "Tahfidz & Diniyah" diaktifkan.
