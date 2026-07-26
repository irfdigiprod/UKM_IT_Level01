# Pertemuan 1: Pengenalan Web & Anatomi Dokumen HTML

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami cara kerja dasar halaman web (konsep *Client-Server*).
* Menjelaskan peran HTML, CSS, dan JavaScript dalam pengembangan web.
* Menuliskan sintaksis dasar elemen HTML secara benar (tag, atribut, konten).
* Memahami fungsi dan maksud dari baris kerangka utama di berkas index.html proyek Pesantren Minhajul Haq.

---

## 2. Bagaimana Web Bekerja?
Sebelum masuk ke penulisan kode, penting bagi kita untuk memahami bagaimana sebuah website dapat muncul di layar komputer atau ponsel kita.

### Protokol Client-Server
Aktivitas berselancar di internet menggunakan arsitektur bernama **Client-Server**:
1. **Client (Klien)**: Perangkat kita (laptop/ponsel) yang menjalankan aplikasi **Web Browser** (seperti Google Chrome, Microsoft Edge, Firefox, atau Safari). Browser bertugas mengirimkan *Request* (permintaan) melalui internet untuk meminta suatu halaman web.
2. **Server**: Komputer khusus yang aktif 24 jam dan bertugas menyimpan berkas website (HTML, CSS, JS, Gambar). Ketika server menerima permintaan dari browser klien, ia mengirimkan kembali berkas-berkas tersebut sebagai *Response* (tanggapan).
3. **Rendering**: Browser membaca kode-kode dalam berkas HTML, CSS, dan JS yang dikirim server, lalu menerjemahkannya menjadi tampilan visual interaktif yang kita lihat.

```
[ Laptop Klien / Browser ]  --- (Minta: index.html) --->  [ Server Pesantren ]
[ Laptop Klien / Browser ]  <--- (Kirim: index.html) ---  [ Server Pesantren ]
```

---

## 3. Tiga Pilar Web Modern
Sebuah website modern dibangun menggunakan perpaduan tiga teknologi utama:

| Pilar Teknologi | Analogi Tubuh / Bangunan | Fungsi Utama |
| :--- | :--- | :--- |
| **HTML** (HyperText Markup Language) | Kerangka Tulang / Struktur Semen | Menyediakan struktur dasar, tata letak, dan konten teks/media. |
| **CSS** (Cascading Style Sheets) | Kulit, Wajah, Pakaian, Hiasan | Memberikan warna, tata letak posisi, jenis huruf, dan visualisasi menarik. |
| **JavaScript** (JS) | Otot, Saraf, Sendi (Fungsi Gerak) | Menambahkan interaktivitas, logika kalkulasi, efek modal popup, dan validasi form. |

---

## 4. Anatomi Sintaksis HTML
HTML bukan bahasa pemrograman (*programming language*), melainkan **bahasa markah** (*markup language*). Kita menandai teks biasa menggunakan penanda khusus bernama **Tag** agar browser mengerti bahwa teks tersebut adalah judul, paragraf, gambar, atau tombol.

### Struktur Elemen HTML
Secara umum, sebuah komponen HTML disebut sebagai **Elemen**. Perhatikan struktur elemen berikut:

```
    Tag Pembuka          Atribut          Konten Teks        Tag Penutup
 ┌──────┴──────┐ ┌─────────┴──────────┐ ┌──────┴──────┐ ┌────────┴────────┐
 <a href="profil.html" target="_blank"> Tentang Kami </a>
    └─┬┘  └───┬──────┘        └───┬──┘
  Nama    Nama Atribut      Nilai Atribut
   Tag
```

### Penjelasan Bagian-Bagian Elemen:
1. **Tag Pembuka (Opening Tag)**: Diawali kurung siku buka `<` dan diakhiri kurung siku tutup `>`. Berisi nama tag (contoh: `a`, `p`, `h1`, `div`). Tag pembuka menandakan awal dari elemen tersebut.
2. **Tag Penutup (Closing Tag)**: Sama seperti tag pembuka, tetapi memiliki karakter garis miring `/` setelah kurung siku buka (contoh: `</a>`, `</p>`). Menandakan akhir dari elemen.
3. **Konten (Content)**: Teks atau elemen lain yang berada di dalam pembungkus tag pembuka dan penutup.
4. **Atribut (Attribute)**: Informasi tambahan yang disisipkan di dalam tag pembuka untuk memodifikasi perilaku elemen. Atribut selalu ditulis dalam format pasangan kunci dan nilai: `nama-atribut="nilai-atribut"`.
   * Contoh: `href` pada tag `<a>` menentukan alamat tujuan link.
   * Contoh: `target="_blank"` memberi tahu browser untuk membuka tautan di tab baru.

### Elemen Tanpa Penutup (Void Elements / Self-Closing)
Ada beberapa elemen HTML khusus yang tidak memerlukan konten teks di dalamnya, sehingga tidak memerlukan tag penutup. Elemen ini cukup ditulis satu tag saja.
* Contoh: Tag ganti baris `<br>`, garis horizontal `<hr>`, penampil gambar `<img>`, dan pendefinisian metadata `<meta>`.

---

## 5. Bedah Kerangka Utama Berkas `index.html`
Sekarang mari kita bedah bagian kepala dan kerangka dasar dari berkas `index.html` proyek Pesantren Minhajul Haq.

Di bawah ini adalah 13 baris kode awal dari proyek tersebut:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Website Resmi Pondok Pesantren Minhajul Haq. Lembaga pendidikan Islam terpadu, unggulan Tahfidz Al-Qur'an, Madrasah, dan Kajian Kitab Kuning.">
  <title>Pesantren Minhajul Haq - Membentuk Generasi Qur'ani & Unggul</title>
  
  <!-- FontAwesome Icon -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  
  <!-- Custom Stylesheet -->
  <link rel="stylesheet" href="style.css">
</head>
```

Mari kita ulas baris demi baris untuk memahami fungsi sintaksisnya:

### 1. `<!DOCTYPE html>`
* **Sintaks**: `<!DOCTYPE html>`
* **Penjelasan**: Deklarasi ini wajib diletakkan di baris paling pertama dokumen. Ia memberi tahu web browser bahwa dokumen yang sedang dibaca ditulis menggunakan standar spesifikasi **HTML5**.

### 2. `<html lang="id">`
* **Atribut**: `lang="id"` menetapkan bahasa utama dokumen adalah Bahasa Indonesia.
* **Fungsi**: Membantu mesin pencari (SEO) dan pembaca layar disabilitas (*screen reader*).

### 3. `<head>`
* **Fungsi**: Menampung informasi metadata yang tidak ditampilkan langsung di layar utama browser.

### 4. `<meta charset="UTF-8">`
* **Fungsi**: Menetapkan pengodean karakter halaman menggunakan standar universal UTF-8 untuk mencegah kesalahan render teks khusus (misalnya huruf Arab).

### 5. `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
* **Fungsi**: Menjamin responsivitas halaman di layar mobile dengan mengatur lebar halaman mengikuti lebar layar perangkat cerdas.

### 6. `<meta name="description" content="...">`
* **Fungsi**: Memberikan ringkasan deskripsi pencarian Google (SEO) di halaman SERP.

### 7. `<title>Pesantren Minhajul Haq ... </title>`
* **Fungsi**: Menentukan judul halaman di tab atas browser.

### 8. Tag Tautan Eksternal `<link ...>`
* Menghubungkan library ikon FontAwesome dan berkas stylesheet kustom `style.css`.

---

## 6. Latihan Praktik Pertemuan 1
Cobalah buka berkas `latihan01.html` yang berada satu folder dengan berkas panduan ini untuk melihat contoh implementasinya dan bereksperimen mengubah isinya.
