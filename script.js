// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
    }
    
    // Close mobile menu when clicking links
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            if (menuToggle) {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
    
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                navLinks.classList.remove('active');
                if (menuToggle) {
                    menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
                
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Dynamic Titles Rotation
    const titles = document.querySelectorAll('.title-item');
    if (titles.length > 0) {
        let currentTitle = 0;
        
        function rotateTitles() {
            titles.forEach(title => title.classList.remove('active'));
            titles[currentTitle].classList.add('active');
            
            currentTitle = (currentTitle + 1) % titles.length;
        }
        
        // Start rotation every 3 seconds
        setInterval(rotateTitles, 3000);
        
        // Initial rotation
        setTimeout(rotateTitles, 1000);
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Update WhatsApp links with your number
    const whatsappLinks = document.querySelectorAll('a[href*="YOUR-NUMBER-HERE"]');
    whatsappLinks.forEach(link => {
        // Replace with your actual WhatsApp number
        // Format: https://wa.me/265xxxxxxxxx
        link.href = link.href.replace('YOUR-NUMBER-HERE', 'REPLACE-WITH-YOUR-ACTUAL-NUMBER');
    });
    
    // Hover effects for cards
    document.querySelectorAll('.project-card, .passion-card, .role-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Profile image interaction
    const profileImage = document.querySelector('.profile-image');
    const blueOverlay = document.querySelector('.blue-overlay');
    
    if (profileImage && blueOverlay) {
        profileImage.addEventListener('mouseenter', () => {
            blueOverlay.style.opacity = '0.5';
        });
        
        profileImage.addEventListener('mouseleave', () => {
            blueOverlay.style.opacity = '0.7';
        });
    }
    
    // Social icons animation
    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Skill tags animation
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Scroll reveal animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.passion-card, .project-card, .timeline-item, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Stagger animations */
        .passion-card:nth-child(1) { transition-delay: 0.1s; }
        .passion-card:nth-child(2) { transition-delay: 0.2s; }
        .passion-card:nth-child(3) { transition-delay: 0.3s; }
        .passion-card:nth-child(4) { transition-delay: 0.4s; }
        
        .project-card:nth-child(1) { transition-delay: 0.1s; }
        .project-card:nth-child(2) { transition-delay: 0.2s; }
        .project-card:nth-child(3) { transition-delay: 0.3s; }
        
        .timeline-item:nth-child(1) { transition-delay: 0.1s; }
        .timeline-item:nth-child(2) { transition-delay: 0.2s; }
        .timeline-item:nth-child(3) { transition-delay: 0.3s; }
    `;
    document.head.appendChild(style);
    
    // Prevent click on coming soon items
    document.querySelectorAll('.coming-soon').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });
    
    // Log successful load
    console.log('Portfolio loaded successfully! 🚀');
});

// Page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
