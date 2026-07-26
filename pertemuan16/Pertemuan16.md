# Pertemuan 16: JavaScript Form Validation & Integrasi Akhir

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami cara membatalkan perilaku bawaan browser pada pengiriman form (`event.preventDefault()`).
* Menguasai konsep dasar *Regular Expression* (RegEx) untuk memvalidasi pola data input (Email & WhatsApp).
* Merancang kotak pesan umpan balik kustom (`.alert-message`) yang dinamis berdasarkan status pengiriman.
* Mengintegrasikan seluruh berkas (HTML, CSS, JS, dan Gambar) menjadi satu kesatuan proyek utuh website profil Pesantren Minhajul Haq yang premium dan fungsional.

---

## 2. Mengapa Membatalkan Submit Bawaan Browser?
Secara bawaan (*default*), ketika tombol submit di dalam tag `<form>` diklik, browser akan langsung menyegarkan (*refresh*) halaman untuk mengirimkan data ke file tujuan yang ditulis di atribut `action`.

Karena kita memproses pengiriman data di sisi klien menggunakan JavaScript, kita harus membatalkan perilaku bawaan browser tersebut dengan memanggil metode **`event.preventDefault()`** di awal fungsi:
```javascript
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Mencegah browser melakukan refresh halaman!
  
  // Proses validasi dan pengiriman data di bawah...
});
```

---

## 3. Validasi Pola dengan Regular Expression (RegEx)
**Regular Expression (RegEx)** adalah deretan karakter khusus yang membentuk pola pencarian untuk memeriksa kecocokan format data teks.

Pada proyek pesantren kita, kita merancang 2 fungsi validasi kustom:

### A. Validasi Format Email
Format email harus memiliki teks, diikuti karakter `@`, diikuti domain, lalu diakhiri tanda titik `.`.
```javascript
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email); // Mengembalikan nilai true jika format cocok, dan false jika salah
}
```

### B. Validasi Nomor WhatsApp
Nomor telepon/WhatsApp hanya boleh berisi angka (dan karakter `+` di awal jika ada) dengan panjang minimal 9 digit dan maksimal 15 digit.
```javascript
function validatePhone(phone) {
  const re = /^[0-9+]{9,15}$/;
  return re.test(phone);
}
```

---

## 4. Menampilkan Pesan Umpan Balik (Alert Message)
Di bagian dalam formulir, kita menyediakan kotak penampung kosong `<div class="alert-message" id="contactAlert"></div>`.
* **Jika Validasi Gagal**: Kita ubah kelas kotak menjadi `.alert-error` (merah) dan isi teks dengan instruksi kesalahan.
* **Jika Validasi Sukses**: Kita ubah kelas menjadi `.alert-success` (hijau), tampilkan pesan terima kasih, dan reset form menggunakan fungsi `.reset()`.

---

## 5. Latihan Praktik Pertemuan 16 (Tahap Final Proyek)

### Instruksi:
1. Periksa berkas `index.html`, `style.css`, dan `app.js` pada folder `pertemuan16/`.
2. Buka berkas `index.html` dan perhatikan penampung pesan umpan balik di dalam form kontak:
   ```html
   <div class="alert-message" id="contactAlert"></div>
   ```
3. Buka berkas `style.css` bagian Pertemuan 16 dan amati gaya warna untuk kelas `.alert-success` (hijau) dan `.alert-error` (merah).
4. Buka berkas `app.js` bagian Pertemuan 16. Pelajari pendefinisian fungsi validasi email, validasi telepon, dan pendaftaran event listener `'submit'` pada form kontak serta form pendaftaran modal.
5. Jalankan `index.html` di browser Anda.
6. **Uji Validasi Form Kontak**:
   * Kosongkan form lalu klik "Kirim Pesan". Pesan eror merah akan muncul berbunyi "Semua kolom wajib diisi!".
   * Isi nama, tapi masukkan format email salah (misal `budi.com` tanpa `@`). Klik kirim. Muncul pesan eror email.
   * Masukkan email benar, tapi masukkan WhatsApp salah (misal `abcde`). Muncul eror whatsapp.
   * Isi semua data dengan benar. Klik kirim. Kotak sukses hijau berbunyi "Terima kasih! Pesan Anda telah berhasil terkirim..." akan muncul dan form otomatis ter-reset bersih.
7. **Uji Validasi Form Pendaftaran Modal**:
   * Buka modal pendaftaran, isi data dengan benar, lalu submit.
   * Amati: Kotak sukses hijau akan muncul di dalam modal, kemudian **jendela modal akan menutup otomatis** setelah jeda 4.5 detik.
8. **Selamat!** Berkas `index.html`, `style.css`, dan `app.js` Anda di folder `pertemuan16` kini telah **100% identik dan lengkap** dengan proyek website utama Pesantren Minhajul Haq yang dibuat di awal!

---

## 6. Proyek Akhir
Gunakan berkas di dalam folder `pertemuan16/` ini sebagai patokan hasil akhir website Anda. Anda dapat mengembangkannya lebih lanjut dengan mengganti nama pesantren, gambar, atau menambahkan section berita dan galeri kustom.
