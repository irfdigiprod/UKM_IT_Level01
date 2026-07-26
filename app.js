document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. THEME TOGGLE (DARK / LIGHT MODE)
  // ==========================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Set initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);

  themeToggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    let newTheme = theme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });


  // ==========================================
  // 2. MOBILE MENU (HAMBURGER)
  // ==========================================
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

  // Close mobile menu when clicking nav links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('active')) {
        toggleMenu();
      }
    });
  });


  // ==========================================
  // 3. STICKY HEADER & ACTIVE SECTION ON SCROLL
  // ==========================================
  const header = document.getElementById('header');
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    // Sticky Header class toggling
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Dynamic active links in navbar
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


  // ==========================================
  // 4. PROGRAM EDUCATION FILTER
  // ==========================================
  const filterButtons = document.querySelectorAll('.filter-btn');
  const programCards = document.querySelectorAll('.program-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Manage active filter button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      programCards.forEach(card => {
        // Animation transition out
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9) translateY(10px)';
        
        setTimeout(() => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            card.style.display = 'flex';
            // Slight delay for smooth transition back in
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


  // ==========================================
  // 5. REGISTRATION MODAL CONTROLLER
  // ==========================================
  const registerModal = document.getElementById('registerModal');
  const openRegisterModalBtn = document.getElementById('openRegisterModalBtn');
  const heroRegisterBtn = document.getElementById('heroRegisterBtn');
  const closeRegisterModalBtn = document.getElementById('closeRegisterModalBtn');
  const cancelRegisterModalBtn = document.getElementById('cancelRegisterModalBtn');
  const modalOverlay = document.getElementById('modalOverlay');

  function openModal() {
    registerModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Disable background scrolling
  }

  function closeModal() {
    registerModal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Enable background scrolling
    document.getElementById('registerForm').reset();
    const alertBox = document.getElementById('registerAlert');
    alertBox.style.display = 'none';
  }

  openRegisterModalBtn.addEventListener('click', openModal);
  heroRegisterBtn.addEventListener('click', openModal);
  closeRegisterModalBtn.addEventListener('click', closeModal);
  cancelRegisterModalBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);


  // ==========================================
  // 6. FORM VALIDATION & ACTIONS
  // ==========================================
  
  // Contact Form
  const contactForm = document.getElementById('contactForm');
  const contactAlert = document.getElementById('contactAlert');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const phone = document.getElementById('contactPhone').value.trim();
    const message = document.getElementById('contactMessage').value.trim();

    // Reset Alert
    contactAlert.style.display = 'none';
    contactAlert.className = 'alert-message';

    // Simple validation
    if (!name || !email || !phone || !message) {
      showAlert(contactAlert, 'Semua kolom wajib diisi!', 'error');
      return;
    }

    if (!validateEmail(email)) {
      showAlert(contactAlert, 'Silakan masukkan alamat email yang valid!', 'error');
      return;
    }

    if (!validatePhone(phone)) {
      showAlert(contactAlert, 'Nomor WhatsApp hanya boleh berisi angka (minimal 9 karakter)!', 'error');
      return;
    }

    // Success response mockup
    showAlert(contactAlert, 'Terima kasih! Pesan Anda telah berhasil terkirim. Humas kami akan segera menghubungi Anda.', 'success');
    contactForm.reset();
  });

  // Registration Form
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

    if (!name || !birthPlace || !birthDate || !gender || !program || !parent || !phone) {
      showAlert(registerAlert, 'Harap isi semua kolom formulir pendaftaran!', 'error');
      return;
    }

    if (!validatePhone(phone)) {
      showAlert(registerAlert, 'Nomor WhatsApp hanya boleh berisi angka (minimal 9 karakter)!', 'error');
      return;
    }

    // Success response mockup
    showAlert(registerAlert, `Pendaftaran ${name} berhasil disimpan! Tim PSB kami akan menghubungi Orang Tua/Wali ke nomor ${phone} dalam waktu 1x24 jam untuk instruksi seleksi berkas.`, 'success');
    
    // Automatically close modal after success
    setTimeout(() => {
      closeModal();
    }, 4500);
  });

  // Helper Functions
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


  // ==========================================
  // 7. SCROLL REVEAL ANIMATIONS
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal-element');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // Stop observing after animation is revealed
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

});
