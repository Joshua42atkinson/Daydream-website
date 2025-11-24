// ========================================
// LTD Portfolio - Interactive JavaScript
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initScrollAnimations();
  initPortfolioFilter();
  initSmoothScroll();
  initActiveNavLink();
});

// === Mobile Menu Toggle ===
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  
  if (menuToggle && navbarMenu) {
    menuToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      const isOpen = navbarMenu.classList.contains('active');
      menuToggle.innerHTML = isOpen ? '✕' : '☰';
    });
    
    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.navbar-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
        menuToggle.innerHTML = '☰';
      });
    });
  }
}

// === Scroll Reveal Animations ===
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  const scrollElements = document.querySelectorAll('.scroll-reveal');
  scrollElements.forEach(el => observer.observe(el));
}

// === Portfolio Filter ===
function initPortfolioFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  
  if (filterButtons.length === 0) return;
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      const filter = button.dataset.filter;
      
      // Filter cards
      portfolioCards.forEach(card => {
        const category = card.dataset.category;
        
        if (filter === 'all' || category === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.8)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

// === Smooth Scroll ===
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 80; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// === Active Nav Link ===
function initActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar-link');
  
  if (sections.length === 0 || navLinks.length === 0) return;
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 100) {
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
}

// === Portfolio Card Click Handler ===
function handlePortfolioCardClick(projectId) {
  // Navigate to project detail page
  window.location.href = `/project/${projectId}`;
}

// === Search Functionality ===
function initSearch() {
  const searchInput = document.querySelector('.search-input');
  const portfolioCards = document.querySelectorAll('.portfolio-card');
  
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    portfolioCards.forEach(card => {
      const title = card.querySelector('.portfolio-card-title').textContent.toLowerCase();
      const description = card.querySelector('.portfolio-card-description').textContent.toLowerCase();
      const tags = Array.from(card.querySelectorAll('.tag')).map(tag => tag.textContent.toLowerCase());
      
      const matches = title.includes(searchTerm) || 
                     description.includes(searchTerm) ||
                     tags.some(tag => tag.includes(searchTerm));
      
      if (matches) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'scale(1)';
        }, 10);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  });
}

// Initialize search if on portfolio page
if (document.querySelector('.search-input')) {
  initSearch();
}

// === Navbar Background on Scroll ===
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(15, 15, 30, 0.95)';
  } else {
    navbar.style.background = 'var(--glass-bg)';
  }
});
