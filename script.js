// script.js

document.addEventListener('DOMContentLoaded', function() {
  
  // Mobile Navigation
  const burger = document.querySelector('.nav-burger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  if (burger) {
    burger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
      });
    });
  }

  // Terminal Typing Effect
  const typingText = document.getElementById('typing-text');
  const commands = [
    'whoami',
    'Dany G Sam',
    'cat mission.txt',
    'Aspiring CISO @ Yandex Moscow',
    'ls skills/',
    'cybersecurity blockchain quantum-computing',
    'sudo secure-the-future'
  ];
  
  let commandIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeCommand() {
    const currentCommand = commands[commandIndex];
    
    if (!isDeleting) {
      typingText.textContent = currentCommand.substring(0, charIndex + 1);
      charIndex++;
      
      if (charIndex === currentCommand.length) {
        isDeleting = true;
        setTimeout(typeCommand, 2000);
        return;
      }
    } else {
      typingText.textContent = currentCommand.substring(0, charIndex - 1);
      charIndex--;
      
      if (charIndex === 0) {
        isDeleting = false;
        commandIndex = (commandIndex + 1) % commands.length;
      }
    }
    
    const typingSpeed = isDeleting ? 50 : 100;
    setTimeout(typeCommand, typingSpeed);
  }
  
  typeCommand();

  // Matrix Canvas Effect
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#dc143c';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = matrix[Math.floor(Math.random() * matrix.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(drawMatrix, 50);

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  // Parallax Scrolling
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallax = document.querySelector('.parallax-bg');
    
    if (parallax) {
      parallax.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Scroll Animation Observer
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  }, observerOptions);

  document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
  });

  // Smooth Scroll for Navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Progress Bar Animation
  const progressBars = document.querySelectorAll('.progress-fill');
  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = '0%';
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
        progressObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  progressBars.forEach(bar => {
    progressObserver.observe(bar);
  });

  // Navbar Background on Scroll
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
      navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
      navbar.style.background = 'rgba(0, 0, 0, 0.8)';
    }
  });

  // Glitch Effect Enhancement
  const glitchElement = document.querySelector('.glitch');
  if (glitchElement) {
    setInterval(() => {
      if (Math.random() > 0.95) {
        glitchElement.style.textShadow = `
          ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(220, 20, 60, 0.7),
          ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(139, 92, 246, 0.7)
        `;
        
        setTimeout(() => {
          glitchElement.style.textShadow = 'none';
        }, 50);
      }
    }, 2000);
  }

});