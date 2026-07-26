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
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    const activeTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = activeTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });


  // --- LOGIKA MENU HAMBURGER (NAVIGASI MOBILE) ---
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  function toggleMenu() {
    navMenu.classList.toggle('active');
    const icon = hamburgerBtn.querySelector('i');
    
    if (navMenu.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-xmark');
    } else {
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    }
  }

  hamburgerBtn.addEventListener('click', toggleMenu);

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


  // ==========================================================================
  // MATERI PERTEMUAN 14: LOGIKA TAB FILTER PROGRAM PENDIDIKAN
  // ==========================================================================

  const filterButtons = document.querySelectorAll('.filter-btn');
  const programCards = document.querySelectorAll('.program-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      programCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9) translateY(10px)';
        
        setTimeout(() => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
            
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1) translateY(0)';
            }, 50);
          } else {
            card.style.display = 'none';
          }
        }, 300);
      });
    });
  });


  // ==========================================================================
  // MATERI PERTEMUAN 15: PEMBUATAN POPUP MODAL BOX PENDAFTARAN
  // ==========================================================================

  const registerModal = document.getElementById('registerModal');
  const openRegisterModalBtn = document.getElementById('openRegisterModalBtn');
  const heroRegisterBtn = document.getElementById('heroRegisterBtn');
  const closeRegisterModalBtn = document.getElementById('closeRegisterModalBtn');
  const cancelRegisterModalBtn = document.getElementById('cancelRegisterModalBtn');
  const modalOverlay = document.getElementById('modalOverlay');

  // Fungsi Membuka Jendela Modal (Kunci Scroll Background)
  function openModal() {
    registerModal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
  }

  // Fungsi Menutup Jendela Modal (Kembalikan Scroll Background)
  function closeModal() {
    registerModal.classList.remove('active');
    document.body.style.overflow = 'auto'; 
  }

  // Daftarkan event klik pembuka
  openRegisterModalBtn.addEventListener('click', openModal);
  heroRegisterBtn.addEventListener('click', openModal);

  // Daftarkan event klik penutup
  closeRegisterModalBtn.addEventListener('click', closeModal);
  cancelRegisterModalBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal); // Tutup saat mengklik overlay hitam blur

});
