function createTradingAnimation() {
    const background = document.querySelector('.trading-background');
    const candlesticks = 20;
    
    for (let i = 0; i < candlesticks; i++) {
        const candlestick = document.createElement('div');
        candlestick.className = 'candlestick';
        candlestick.style.left = `${i * 5}%`;
        candlestick.style.height = `${Math.random() * 50 + 20}%`;
        candlestick.style.animationDelay = `${i * 0.2}s`;
        background.appendChild(candlestick);
    }
}

function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const loginContainer = document.querySelector('.login-container');

    errorMessage.textContent = '';

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please enter both username and password';
        loginContainer.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            loginContainer.style.animation = 'float 6s ease-in-out infinite';
        }, 500);
        return false;
    }

    // Success animation
    loginContainer.style.transform = 'scale(0.9) translateZ(-100px)';
    loginContainer.style.opacity = '0';
    setTimeout(() => {
        window.location.href = '/dashboard.html'; // Redirect to dashboard
    }, 800);
    return false;
}

window.addEventListener('load', () => {
    createTradingAnimation();
});

// Add smooth scroll for menu items
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});window.addEventListener('load', createParticles);

// Add this to your existing JavaScript
document.querySelector('.mobile-menu-icon').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.mobile-menu') && !e.target.closest('.mobile-menu-icon')) {
        document.querySelector('.mobile-menu').classList.remove('active');
    }
});
