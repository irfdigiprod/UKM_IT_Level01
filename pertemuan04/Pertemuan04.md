# Pertemuan 4: Formulir (Form) & Elemen Input HTML

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami konsep pengumpulan data pengguna menggunakan tag `<form>`.
* Mengidentifikasi dan menjelaskan jenis-jenis tag input (`text`, `email`, `tel`, `date`, `select`, `textarea`).
* Menerapkan label (`<label>`) dan atribut validasi dasar (`required`, `placeholder`) pada input.
* Menyusun kode formulir Hubungi Kami dan formulir Pendaftaran Santri Baru pada berkas proyek website Pesantren Minhajul Haq.

---

## 2. Struktur Dasar Formulir HTML
Formulir (*form*) adalah pintu gerbang interaksi dua arah antara pengguna dan pemilik website. Di HTML, seluruh elemen input harus dibungkus di dalam sebuah kontainer bernama tag `<form>`.

```html
<form action="proses.php" method="POST">
  <!-- Elemen Input di sini -->
</form>
```
* **Atribut `action`**: Menentukan URL tujuan berkas server yang akan memproses kiriman data form.
* **Atribut `method`**: Metode pengiriman data HTTP (biasanya `GET` untuk pencarian, dan `POST` untuk pengiriman data rahasia/besar seperti pendaftaran).

*(Catatan: Karena website kita adalah halaman statis yang akan divalidasi dengan JavaScript di Pertemuan 16, kita menggunakan atribut `id="contactForm"` dan menambahkan atribut `novalidate` agar validasi bawaan browser dinonaktifkan sementara).*

---

## 3. Jenis-Jenis Elemen Kontrol Input
Mari kita bedah berbagai macam input yang kita gunakan pada proyek:

### A. Input Teks Biasa (`type="text"`)
Digunakan untuk memasukkan satu baris teks pendek seperti nama lengkap atau tempat lahir.
```html
<input type="text" id="nama" placeholder="Masukkan nama...">
```

### B. Input Email (`type="email"`)
Memastikan input yang dimasukkan berformat alamat email yang valid (mengandung karakter `@` dan nama domain).
```html
<input type="email" id="email" placeholder="nama@email.com">
```

### C. Input Telepon (`type="tel"`)
Digunakan khusus untuk input nomor telepon/WhatsApp.
```html
<input type="tel" id="telepon" placeholder="0812...">
```

### D. Input Tanggal (`type="date"`)
Menampilkan antarmuka kalender bawaan browser (*date picker*) agar pengguna dapat memilih tanggal, bulan, dan tahun lahir secara mudah.
```html
<input type="date" id="tanggalLahir">
```

### E. Tag Pilihan Kotak / Dropdown (`<select>`)
Digunakan untuk membuat daftar pilihan yang bisa diklik (seperti pilihan jenis kelamin atau program studi).
* **Tag**: Menggunakan pasangan `<select>` yang membungkus beberapa tag `<option>`.
```html
<select id="gender">
  <option value="" disabled selected>Pilih Gender</option>
  <option value="L">Laki-laki</option>
  <option value="P">Perempuan</option>
</select>
```

### F. Area Teks Panjang (`<textarea>`)
Digunakan untuk menampung teks masukan yang panjang, seperti isi pesan, keluhan, atau alamat lengkap.
```html
<textarea id="pesan" placeholder="Tulis pesan..."></textarea>
```

---

## 4. Pentingnya Elemen `<label>`
Setiap input wajib memiliki `<label>` pendamping. Label berfungsi memberi tahu pengguna data apa yang harus diisi.
* **Kaitan ID**: Label dihubungkan ke elemen input melalui atribut `for` yang nilainya harus **persis sama** dengan nilai atribut `id` pada input target.
* **Manfaat**: Jika pengguna mengklik teks label, kursor akan otomatis terfokus (*focus*) ke dalam kotak input terkait.

```html
<label for="regName">Nama Calon Santri</label>
<input type="text" id="regName">
```

---

## 5. Latihan Praktik Pertemuan 4 (Progres Berkas Proyek)

### Instruksi:
1. Buka berkas `index.html` di dalam folder `pertemuan04/` ini.
2. Gulir ke bagian bawah halaman pada `<section id="kontak">`. Perhatikan bagaimana kita telah menaruh formulir kontak terstruktur:
   - Input nama, email, nomor whatsapp, dan isi pesan.
   - Tombol kirim pesan `<button type="submit">`.
3. Perhatikan pula di bagian paling bawah sebelum tag penutup `</body>`. Kita telah menambahkan wadah pendaftaran santri baru berupa form modal `<div id="registerModal">` yang memiliki input pilihan program studi (`<select>`), tempat lahir (`type="text"`), tanggal lahir (`type="date"`), dan input penunjang lainnya.
4. Buka di browser Anda. Uji dengan mengklik label-label seperti "Nama Lengkap" atau "Alamat Email", lalu rasakan bagaimana kursor langsung aktif di kotak pengisian terkait.
5. **Tantangan Mandiri**: Pada formulir pendaftaran santri baru (`#registerForm`), tambahkan input baru untuk "Pekerjaan Orang Tua" menggunakan tag `<input type="text">` lengkap dengan `<label>`-nya.
