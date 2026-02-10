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
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
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
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Dynamic Titles Animation
    const titles = document.querySelectorAll('.title-item');
    let currentTitle = 0;
    
    function rotateTitles() {
        titles.forEach(title => title.classList.remove('active'));
        titles[currentTitle].classList.add('active');
        
        currentTitle = (currentTitle + 1) % titles.length;
    }
    
    // Start rotating every 3 seconds
    setInterval(rotateTitles, 3000);
    
    // Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Chatbot Functionality
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbotClose = document.querySelector('.chatbot-close');
    const chatbotSend = document.querySelector('.chatbot-send');
    const chatbotInput = document.querySelector('.chatbot-input textarea');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    
    if (chatbotToggle && chatbotContainer) {
        // Toggle chatbot
        chatbotToggle.addEventListener('click', () => {
            chatbotContainer.classList.toggle('active');
        });
        
        // Close chatbot
        chatbotClose.addEventListener('click', () => {
            chatbotContainer.classList.remove('active');
        });
        
        // Send message
        chatbotSend.addEventListener('click', sendChatbotMessage);
        chatbotInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                sendChatbotMessage();
            }
        });
        
        function sendChatbotMessage() {
            const message = chatbotInput.value.trim();
            if (message) {
                // Add user message
                const userMessage = document.createElement('div');
                userMessage.className = 'chatbot-message';
                userMessage.innerHTML = `<p>${message}</p>`;
                chatbotMessages.appendChild(userMessage);
                
                // Clear input
                chatbotInput.value = '';
                
                // Auto-reply after delay
                setTimeout(() => {
                    const replies = [
                        "Thanks for your message! This is a demo chatbot. Joel will get back to you via email or WhatsApp.",
                        "Message received! This simulator shows interactive features. Contact Joel directly for real conversations.",
                        "Nice message! This is just for demonstration. Use the WhatsApp button for instant messaging with Joel."
                    ];
                    
                    const botMessage = document.createElement('div');
                    botMessage.className = 'chatbot-message bot';
                    botMessage.innerHTML = `<p>${replies[Math.floor(Math.random() * replies.length)]}</p>`;
                    chatbotMessages.appendChild(botMessage);
                    
                    // Scroll to bottom
                    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
                }, 1000);
                
                // Scroll to bottom
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
        }
    }
    
    // WhatsApp number placeholder
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        // Replace with your actual WhatsApp number
        // Format: https://wa.me/265XXXXXXXXX (Malawi code + number without +)
        whatsappBtn.href = "https://wa.me/265YOUR-NUMBER-HERE?text=Hi%20Joel,%20I%20saw%20your%20portfolio!";
    }
    
    // Hover effects for cards
    document.querySelectorAll('.project-card, .about-card, .contact-item').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Skill tags animation
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Photo glow effect
    const photoGlow = document.querySelector('.photo-glow');
    if (photoGlow) {
        photoGlow.style.animation = 'pulse 3s ease-in-out infinite';
    }
    
    // Scroll reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.about-card, .project-card, .timeline-item, .skill-category').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Initialize
    console.log('Portfolio loaded successfully! 🚀');
    
    // Auto-start title rotation
    rotateTitles();
});

// Add CSS for pulse animation if not in style.css
const pulseStyle = document.createElement('style');
pulseStyle.textContent = `
    @keyframes pulse {
        0%, 100% { opacity: 0.3; }
        50% { opacity: 0.6; }
    }
`;
document.head.appendChild(pulseStyle);
