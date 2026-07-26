# Pertemuan 15: Pembuatan Popup Modal Box Pendaftaran

## 1. Tujuan Pembelajaran
Setelah menyelesaikan materi pertemuan ini, peserta didik diharapkan mampu:
* Memahami konsep antarmuka *Modal Dialog Box* dan struktur penumpukan elemen di layar.
* Menyusun gaya visual modal melayang di tengah layar lengkap dengan efek kaca buram latar belakang (*backdrop blur*).
* Menerapkan kontrol aliran gulir halaman (*overflow control*) agar layar latar belakang terkunci saat modal aktif.
* Menghubungkan fungsi klik tombol pembuka dan penutup modal (kross close, tombol batal, overlay) di JavaScript.

---

## 2. Struktur Visual Modal Dialog
**Modal** adalah jendela popup yang muncul di atas halaman utama website. Biasanya menuntut fokus penuh pengguna (misalnya untuk pengisian form darurat seperti pendaftaran atau login).

Modal premium terdiri dari 2 lapisan utama:
1. **Modal Overlay**: Lapangan transparan yang menutupi seluruh layar di belakang modal untuk memfokuskan pandangan pengguna ke jendela form dan memburamkan halaman utama.
2. **Modal Content (Card)**: Kotak kartu utama penampung form di tengah layar.

```
┌──────────────────────────────────────────────┐
│  [ NAVBAR STICKY HEADER ]                    │
│ ┌──────────────────────────────────────────┐ │
│ │  [ MODAL OVERLAY (Transparan Blur) ]     │ │
│ │   ┌──────────────────────────────────┐   │ │
│ │   │       [ MODAL CONTENT ]          │   │ │
│ │   │  Daftar Santri Baru           ✕  │   │ │
│ │   │ ──────────────────────────────── │   │ │
│ │   │  [ Nama Calon Santri           ] │   │ │
│ │   │  [ Jenis Kelamin (Select)      ] │   │ │
│ │   │ ──────────────────────────────── │   │ │
│ │   │                  [Batal] [Kirim] │   │ │
│ │   └──────────────────────────────────┘   │ │
│ └──────────────────────────────────────────┘ │
└──────────────────────────────────────────────┘
```

---

## 3. Menghias Modal dengan CSS (Transition Zoom)
Untuk memunculkan modal secara dinamis, kita menggunakan properti `position: fixed` dengan ukuran `width: 100%` dan `height: 100%`. Secara default, modal dinonaktifkan menggunakan `opacity: 0` dan `pointer-events: none` agar tidak bisa diklik.

Saat kelas `.active` ditambahkan oleh JavaScript, kita ubah ke `opacity: 1` dan `pointer-events: auto`.
```css
/* Kotak Utama Modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none; /* Cegah klik tidak sengaja */
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Jendela Kartu Utama */
.modal-content {
  background-color: var(--bg-card);
  width: 90%;
  max-width: 550px;
  border-radius: 20px;
  transform: scale(0.85); /* Efek mengecil sedikit sebelum membesar */
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); /* Gerakan membal */
}

/* Ketika Kelas Active Menyala */
.modal.active {
  opacity: 1;
  pointer-events: auto;
}

.modal.active .modal-content {
  transform: scale(1); /* Efek membesar membal ke ukuran semula */
}
```

---

## 4. Mengunci Scroll Background di JavaScript
Salah satu kelemahan modal sederhana adalah pengguna tetap dapat men-scroll halaman utama di belakang modal saat membaca isi formulir. Ini sangat mengganggu.

Kita dapat mengatasinya di JavaScript dengan mengubah nilai `overflow` pada `body` ketika modal dibuka dan ditutup:
```javascript
const registerModal = document.getElementById('registerModal');

// Fungsi Membuka Modal
function openModal() {
  registerModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Kunci scroll halaman utama!
}

// Fungsi Menutup Modal
function closeModal() {
  registerModal.classList.remove('active');
  document.body.style.overflow = 'auto'; // Bebaskan kembali scroll halaman!
}
```

---

## 5. Latihan Praktik Pertemuan 15 (Progres Berkas Proyek)

### Instruksi:
1. Periksa berkas `index.html`, `style.css`, dan `app.js` pada folder `pertemuan15/`.
2. Buka berkas `index.html`. Perhatikan tombol CTA pendaftaran di navbar (`id="openRegisterModalBtn"`) dan tombol pendaftaran di Hero (`id="heroRegisterBtn"`). Cari pula tag penutup modal (`id="closeRegisterModalBtn"`) dan tombol batal (`id="cancelRegisterModalBtn"`).
3. Buka berkas `style.css` bagian Pertemuan 15 dan amati rancangan visual kartu modal.
4. Buka berkas `app.js` bagian Pertemuan 15 dan ulas pendaftaran event listener klik.
5. Jalankan `index.html` di browser Anda.
   * **Amati**: Jendela modal formulir pendaftaran sekarang **sudah disembunyikan secara rapi di awal**.
   * Klik tombol "Daftar Sekarang" di navbar atau tombol "Mulai Pendaftaran" di Hero.
   * **Amati**: Jendela modal akan meluncur membesar secara membal (*zoom scale spring*) dari tengah layar dengan bayangan gelap blur di belakangnya.
   * Cobalah scroll layar. Layar teratur terkunci tidak bisa digulir.
   * Tutup kembali modal dengan mengklik tanda silang (x), mengklik area gelap blur di belakang modal, atau mengklik tombol "Batal".
6. **Tantangan Mandiri**: Di berkas `app.js`, daftarkan event keydown `'Escape'` pada objek `window` agar saat pengguna menekan tombol keyboard **ESC**, modal pendaftaran otomatis menutup jika sedang terbuka.
