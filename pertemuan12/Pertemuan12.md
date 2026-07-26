# Pertemuan 12: Dasar JavaScript & Manipulasi DOM (Document Object Model)

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami fungsi JavaScript dalam menambahkan interaktivitas pada halaman web.
* Menghubungkan berkas JavaScript eksternal `app.js` ke dokumen HTML secara benar.
* Menjelaskan konsep dasar *Document Object Model* (DOM).
* Menerapkan API manipulasi kelas DOM (`classList.add`, `classList.remove`).
* Mengaktifkan animasi masuk konten (*Scroll Reveal*) secara dinamis menggunakan objek browser modern `IntersectionObserver`.

---

## 2. Pengenalan JavaScript & Integrasi
Jika HTML adalah tulang dan CSS adalah pakaian, maka **JavaScript** adalah sistem saraf dan otot yang memberikan fungsi gerak pada website. Tanpa JavaScript, halaman web akan mati dan tidak bisa merespons tindakan pengguna secara cerdas.

Untuk menghubungkan berkas JavaScript eksternal, kita menempatkan tag `<script>` tepat di baris paling bawah tepat sebelum tag penutup `</body>`:
```html
  <script src="app.js"></script>
</body>
```
*TIPS: Menaruh tag script di bagian bawah berguna agar browser memuat seluruh struktur HTML dan CSS terlebih dahulu sebelum menjalankan logika JavaScript. Hal ini mempercepat loading halaman dan mencegah error seleksi elemen.*

---

## 3. Apa itu DOM (Document Object Model)?
Ketika halaman web dimuat, browser menerjemahkan seluruh tag HTML menjadi sebuah struktur pohon objek yang disebut **DOM (Document Object Model)**.

Melalui DOM, JavaScript dapat mengakses, menambah, mengubah, atau menghapus elemen HTML secara langsung.
* Contoh menyeleksi satu elemen unik:
  ```javascript
  const header = document.getElementById('header');
  ```
* Contoh menyeleksi banyak elemen berkelas sama (menghasilkan daftar/array):
  ```javascript
  const revealElements = document.querySelectorAll('.reveal-element');
  ```

---

## 4. Mengenal Intersection Observer (Scroll Reveal)
Di masa lalu, developer mendeteksi posisi scroll layar menggunakan event listener `'scroll'` biasa. Cara lama ini sangat boros memori komputer dan membuat gerakan scroll terasa patah-patah (*lagging*).

Web modern menggunakan API baru yang sangat efisien bernama **`IntersectionObserver`**. Objek ini bertugas mengamati elemen-elemen web tertentu dan memberi tahu kita secara otomatis jika elemen tersebut telah muncul di layar ponsel/monitor pengguna (*intersecting*).

Berikut adalah logika scroll reveal di berkas `app.js`:
```javascript
// 1. Jalankan kode hanya setelah seluruh struktur HTML selesai dimuat browser
document.addEventListener('DOMContentLoaded', () => {

  // 2. Seleksi seluruh elemen yang memiliki kelas reveal-element
  const revealElements = document.querySelectorAll('.reveal-element');

  // 3. Buat objek pengamat (Observer)
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Jika elemen masuk ke layar
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // Tambahkan kelas 'active' (membuat opacity: 1)
        observer.unobserve(entry.target);     // Hentikan pengamatan agar animasi tidak berulang-ulang
      }
    });
  }, {
    threshold: 0.15, // Elemen mulai muncul minimal 15% di layar sebelum memicu animasi
    rootMargin: '0px 0px -50px 0px'
  });

  // 4. Perintahkan pengamat untuk mengawasi setiap elemen reveal
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

});
```

---

## 5. Latihan Praktik Pertemuan 12 (Progres Berkas Proyek)

### Instruksi:
1. Periksa berkas `index.html`, `style.css`, dan berkas baru bernama `app.js` pada folder `pertemuan12/`.
2. Buka berkas `style.css` bagian Pertemuan 11. Perhatikan bahwa nilai kelas `.reveal-element` sekarang telah **dikembalikan menjadi `opacity: 0` dan `transform: translateY(30px)`**. Artinya, secara bawaan, semua section profil, program, fasilitas, dan kontak disembunyikan total di awal.
3. Buka berkas `app.js` dan pelajari alur logika penulisan objek `IntersectionObserver` di dalamnya.
4. Jalankan `index.html` di browser Anda.
   * **Amati**: Saat pertama kali terbuka, halaman web hanya memperlihatkan Hero Banner.
   * Cobalah gulir (scroll) layar ke bawah secara perlahan.
   * Perhatikan bagaimana section Profil, kartu Program Pendidikan, dan kartu Fasilitas tiba-tiba meluncur naik satu per satu secara bergantian dengan halus saat mereka masuk ke wilayah pandang layar Anda.
5. **Tantangan Mandiri**: Di dalam file `app.js`, ubah nilai properti opsi `threshold: 0.15` menjadi `0.50` (50%). Gulir halaman web Anda dan perhatikan perbedaannya (Petunjuk: Konten akan memerlukan scroll lebih dalam lagi untuk muncul, karena minimal setengah bagian dari elemen harus masuk layar terlebih dahulu).
