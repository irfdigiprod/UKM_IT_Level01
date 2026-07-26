/* ==========================================================================
   ==========================================================================
   JAVASCRIPT CONTROLLER - PROGRESSIVE CODEBASE - FINAL PRODUCTION
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

  function openModal() {
    registerModal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
  }

  function closeModal() {
    registerModal.classList.remove('active');
    document.body.style.overflow = 'auto'; 
    document.getElementById('registerForm').reset();
    const alertBox = document.getElementById('registerAlert');
    alertBox.style.display = 'none';
  }

  openRegisterModalBtn.addEventListener('click', openModal);
  heroRegisterBtn.addEventListener('click', openModal);
  closeRegisterModalBtn.addEventListener('click', closeModal);
  cancelRegisterModalBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);


  // ==========================================================================
  // MATERI PERTEMUAN 16: JAVASCRIPT FORM VALIDATION & INTEGRASI AKHIR
  // ==========================================================================

  // --- FORMULIR HUBUNGI KAMI (KONTAK) ---
  const contactForm = document.getElementById('contactForm');
  const contactAlert = document.getElementById('contactAlert');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Mencegah browser merefresh halaman secara default

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    // Sembunyikan alert sebelumnya & reset kelas kustom
    contactAlert.style.display = 'none';
    contactAlert.className = 'alert-message';

    // 1. Validasi Kolom Kosong
    if (!name || !email || !phone || !message) {
      showAlert(contactAlert, 'Semua kolom wajib diisi!', 'error');
      return;
    }

    // 2. Validasi Format Email
    if (!validateEmail(email)) {
      showAlert(contactAlert, 'Silakan masukkan alamat email yang valid!', 'error');
      return;
    }

    // 3. Validasi Format Nomor WhatsApp
    if (!validatePhone(phone)) {
      showAlert(contactAlert, 'Nomor WhatsApp hanya boleh berisi angka (minimal 9 karakter)!', 'error');
      return;
    }

    // Tampilkan Umpan Balik Sukses
    showAlert(contactAlert, 'Terima kasih! Pesan Anda telah berhasil terkirim. Humas kami akan segera menghubungi Anda.', 'success');
    contactForm.reset(); // Bersihkan formulir masukan
  });


  // --- FORMULIR MODAL PENDAFTARAN SANTRI BARU ---
  const registerForm = document.getElementById('registerForm');
  const registerAlert = document.getElementById('registerAlert');

  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('regName').value.trim();
    const birthPlace = document.getElementById('regBirthPlace').value.trim();
    const birthDate = document.getElementById('regBirthDate').value;
    const gender = document.getElementById('regGender').value;
    const program = document.getElementById('regProgram').value;
    const parent = document.getElementById('regParent').value.trim();
    const phone = document.getElementById('regPhone').value.trim();

    registerAlert.style.display = 'none';
    registerAlert.className = 'alert-message';

    // 1. Validasi Kolom Kosong
    if (!name || !birthPlace || !birthDate || !gender || !program || !parent || !phone) {
      showAlert(registerAlert, 'Harap isi semua kolom formulir pendaftaran!', 'error');
      return;
    }

    // 2. Validasi Nomor WhatsApp
    if (!validatePhone(phone)) {
      showAlert(registerAlert, 'Nomor WhatsApp hanya boleh berisi angka (minimal 9 karakter)!', 'error');
      return;
    }

    // Tampilkan Sukses & Jadwalkan Penutupan Modal Otomatis
    showAlert(registerAlert, `Pendaftaran ${name} berhasil disimpan! Tim PSB kami akan menghubungi Orang Tua/Wali ke nomor ${phone} dalam waktu 1x24 jam untuk seleksi berkas.`, 'success');
    
    // Tutup modal secara otomatis setelah 4.5 detik
    setTimeout(() => {
      closeModal();
    }, 4500);
  });

  // --- FUNGSI HELPER VALIDATOR ---
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    const re = /^[0-9+]{9,15}$/;
    return re.test(phone);
  }

  function showAlert(alertElement, message, type) {
    alertElement.textContent = message;
    alertElement.style.display = 'block';
    alertElement.classList.add(type === 'success' ? 'alert-success' : 'alert-error');
  }

});
