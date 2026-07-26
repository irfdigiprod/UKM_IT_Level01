/* ==========================================================================
   ==========================================================================
   JAVASCRIPT CONTROLLER - PROGRESSIVE CODEBASE
   ==========================================================================
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // MATERI PERTEMUAN 12: DASAR JAVASCRIPT & MANIPULASI DOM (SCROLL REVEAL)
  // ==========================================================================

  const revealElements = document.querySelectorAll('.reveal-element');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });


  // ==========================================================================
  // MATERI PERTEMUAN 13: JAVASCRIPT EVENT HANDLING & NAVIGASI MOBILE
  // ==========================================================================

  // --- LOGIKA TOGGLE TEMA GELAP/TERANG ---
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  // Membaca preferensi tersimpan di local storage (default terang)
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme); // Simpan di memori browser
  });


  // --- LOGIKA MENU HAMBURGER (NAVIGASI MOBILE) ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu() {
    navMenu.classList.toggle('active');
    const icon = hamburgerBtn.querySelector('i');
    
    // Tukar ikon menu bar dengan ikon X silang
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  }

  hamburgerBtn.addEventListener('click', toggleMenu);

  // Menutup laci menu ponsel secara otomatis jika tautan menu diklik
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });


  // --- LOGIKA BAYANGAN HEADER & LINK AKTIF SAAT SCROLL ---
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    // Efek sticky header
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Sorot link navigasi aktif dinamis sesuai section di layar
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

});
