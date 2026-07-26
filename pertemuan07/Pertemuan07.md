# Pertemuan 7: Box Model & Kustomisasi Tombol (Button)

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Menjelaskan konsep Box Model CSS (Content, Padding, Border, Margin).
* Menjelaskan kegunaan properti `display` (`block`, `inline`, `inline-block`).
* Merancang jarak dan ruang halaman menggunakan properti `margin`, `padding`, dan `border`.
* Kustomisasi tombol interaktif lengkap dengan bayangan (`box-shadow`), efek pergeseran kursor (`:hover`), dan pergerakan halus (`transition`).

---

## 2. Memahami CSS Box Model
Dalam CSS, setiap elemen HTML dianggap sebagai sebuah **kotak persegi panjang** (*box*). Kotak ini terdiri dari beberapa lapisan dari luar ke dalam:

```
  ┌──────────────────────────────────────────────┐
  │                   MARGIN                     │  <-- Jarak luar (spasi antar elemen)
  │   ┌──────────────────────────────────────┐   │
  │   │               BORDER                 │   │  <-- Garis bingkai luar
  │   │   ┌──────────────────────────────┐   │   │
  │   │   │           PADDING            │   │   │  <-- Jarak dalam (antara konten & border)
  │   │   │   ┌──────────────────────┐   │   │   │
  │   │   │   │       CONTENT        │   │   │   │  <-- Area teks, gambar, atau elemen anak
  │   │   │   └──────────────────────┘   │   │   │
  │   │   └──────────────────────────────┘   │   │
  │   └──────────────────────────────────────┘   │
  └──────────────────────────────────────────────┘
```

* **Content**: Isi asli dari elemen (teks/gambar). Ukurannya diatur lewat properti `width` dan `height`.
* **Padding**: Ruang kosong antara konten dengan garis border. Berfungsi memberikan "ruang bernapas" di dalam kotak agar teks tidak menempel garis tepi.
* **Border**: Garis tepi yang mengelilingi padding dan konten. Dapat diatur ketebalan, gaya garis (`solid`, `dashed`, `dotted`), dan warnanya.
* **Margin**: Jarak kosong di sisi terluar dari kotak untuk memisahkan kotak tersebut dari kotak elemen tetangga di sekitarnya.

---

## 3. Perbedaan Display: Block vs Inline vs Inline-Block
Bagaimana kotak-kotak elemen tersebut berperilaku di layar dipengaruhi oleh properti `display`:
1. **Block** (contoh: `<div>`, `<section>`, `<p>`, `<h1-h6>`): Elemen mengambil lebar penuh layar (100%) secara otomatis dan memaksa elemen setelahnya pindah ke baris baru. Mendukung pengaturan `margin` dan `padding` di semua sisi secara sempurna.
2. **Inline** (contoh: `<a>`, `<span>`, `<strong>`): Elemen hanya mengambil lebar selebar kontennya saja dan tidak membuat baris baru. **Tidak mendukung** properti `width`, `height`, serta margin vertikal (atas-bawah).
3. **Inline-Block**: Elemen berperilaku seperti *inline* (berdampingan di baris yang sama), tetapi memiliki karakteristik *block* (bisa diatur lebar `width`, `height`, margin, dan padding secara bebas). Sangat cocok digunakan untuk **Tombol**.

---

## 4. Kustomisasi Tombol & Efek Hover Premium
Agar tombol terasa responsif saat diinteraksikan oleh pengunjung, kita menggabungkan beberapa properti visual:
* **`box-shadow`**: Memberikan bayangan agar tombol terlihat memiliki kedalaman 3D.
  * Sintaks: `box-shadow: horizontal vertical blur spread color;`
  * Contoh: `box-shadow: 0 5px 15px rgba(248, 174, 25, 0.3);`
* **Pseudo-Class `:hover`**: Mengubah gaya tombol ketika kursor mouse melayang di atasnya.
* **`transform: translateY(-2px)`**: Menggeser posisi tombol sedikit ke atas (seolah membal membal ketika didekati kursor).
* **`transition`**: Membuat proses perubahan warna dan posisi dari kondisi normal ke kondisi hover berjalan secara halus (misalnya selama 0.3 detik) tidak patah-patah secara instan.

---

## 5. Latihan Praktik Pertemuan 7 (Progres Berkas Proyek)

### Instruksi:
1. Periksa berkas `index.html` dan `style.css` pada folder `pertemuan07/`.
2. Buka berkas `style.css`. Perhatikan bagaimana kita telah membagi kode menggunakan komentar khusus pembatas materi:
   - `/* ============ MATERI PERTEMUAN 5 ============ */`
   - `/* ============ MATERI PERTEMUAN 6 ============ */`
   - `/* ============ MATERI PERTEMUAN 7 ============ */`
3. Amati penambahan kode pada bagian Pertemuan 7:
   - Pengaturan kelas `.section-padding` untuk memberikan jarak renggang atas-bawah yang nyaman antar bab halaman.
   - Peningkatan gaya kelas `.btn`, `.btn-primary`, dan `.btn-outline` lengkap dengan properti model box (`padding`), perataan (`display: inline-flex`), bayangan (`box-shadow`), efek `:hover` dan transisi gerak (`transition`, `transform`).
4. Jalankan `index.html` di browser Anda. Arahkan kursor Anda ke tombol "Mulai Pendaftaran" atau "Pelajari Profil" di bagian Hero.
   * **Amati**: Tombol akan membesar lembut, naik ke atas, dan memancarkan cahaya bayangan di bawahnya.
5. **Tantangan Mandiri**: Di bagian CSS Pertemuan 7, tambahkan properti `border: 2px solid var(--primary)` di dalam selektor blok kutipan pimpinan (`.leader-quote`) dan atur padding kirinya menjadi `30px` agar tampilannya terlihat lebih menjorok ke dalam.
