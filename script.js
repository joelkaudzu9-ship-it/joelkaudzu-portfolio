// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Mobile Menu
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
    
    // Dynamic Titles
    const titles = document.querySelectorAll('.title-item');
    let currentTitle = 0;
    
    function rotateTitles() {
        titles.forEach(title => title.classList.remove('active'));
        titles[currentTitle].classList.add('active');
        
        currentTitle = (currentTitle + 1) % titles.length;
    }
    
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
    const chatbotInput = document.querySelector('#chatbot-input');
    const chatbotMessages = document.querySelector('.chatbot-messages');
    
    if (chatbotToggle && chatbotContainer) {
        chatbotToggle.addEventListener('click', () => {
            chatbotContainer.classList.toggle('active');
        });
        
        chatbotClose.addEventListener('click', () => {
            chatbotContainer.classList.remove('active');
        });
        
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
                userMessage.innerHTML = `<p><strong>You:</strong> ${message}</p>`;
                chatbotMessages.appendChild(userMessage);
                
                // Clear input
                chatbotInput.value = '';
                
                // Auto-reply
                setTimeout(() => {
                    const replies = [
                        "Thanks for testing the chatbot! This is a demo. For real messages, use the WhatsApp button above.",
                        "Message received (simulation)! This shows interactive features. Contact Joel directly via WhatsApp or email.",
                        "Nice! This chatbot is just for demonstration. 😊 Use the floating WhatsApp button to message Joel directly."
                    ];
                    
                    const botMessage = document.createElement('div');
                    botMessage.className = 'chatbot-message bot';
                    botMessage.innerHTML = `<p><strong>Bot:</strong> ${replies[Math.floor(Math.random() * replies.length)]}</p>`;
                    chatbotMessages.appendChild(botMessage);
                    
                    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
                }, 1000);
                
                chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
            }
        }
    }
    
    // Update WhatsApp link with YOUR number
    const whatsappBtns = document.querySelectorAll('a[href*="YOUR-NUMBER-HERE"]');
    whatsappBtns.forEach(btn => {
        // Replace with your actual number
        // Format: https://wa.me/265xxxxxxxxx
        btn.href = btn.href.replace('YOUR-NUMBER-HERE', 'REPLACE-WITH-YOUR-NUMBER');
    });
    
    // Hover effects
    document.querySelectorAll('.project-card, .passion-card, .role-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
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
    
    // Initialize
    console.log('Portfolio loaded! 🚀');
});
