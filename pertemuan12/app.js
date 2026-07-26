/* ==========================================================================
   ==========================================================================
   JAVASCRIPT CONTROLLER - PROGRESSIVE CODEBASE
   ==========================================================================
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // MATERI PERTEMUAN 12: DASAR JAVASCRIPT & MANIPULASI DOM (SCROLL REVEAL)
  // ==========================================================================

  // 1. Seleksi seluruh elemen di halaman yang memuat kelas 'reveal-element'
  const revealElements = document.querySelectorAll('.reveal-element');

  // 2. Tentukan logika pengamat (IntersectionObserver)
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // Periksa apakah bagian elemen sudah muncul di layar browser
      if (entry.isIntersecting) {
        // Tambahkan kelas CSS 'active' untuk memicu transisi (opacity: 1)
        entry.target.classList.add('active');
        
        // Hentikan pengamatan (unobserve) agar animasi hanya berputar sekali
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15, // Memicu ketika elemen terlihat minimal 15% di layar
    rootMargin: '0px 0px -50px 0px' // Offset margin batas layar
  });

  // 3. Daftarkan seluruh elemen reveal agar diamati oleh observer
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

});
