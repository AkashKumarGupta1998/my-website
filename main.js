// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Initialize components
    initMobileNav();
    initScrollListener();
    initLoading();
    
    // Hide loading screen
    setTimeout(() => {
        document.getElementById('loading').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none';
        }, 300);
    }, 500);
});

// Mobile Navigation
function initMobileNav() {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('.nav-menu');
    
    toggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        menu.classList.toggle('active');
        
        // Toggle body scroll
        document.body.style.overflow = isExpanded ? 'auto' : 'hidden';
    });
}

// Scroll Listener
function initScrollListener() {
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scrolled');
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.classList.add('scrolled', 'hidden');
        } else if (currentScroll < lastScroll) {
            header.classList.add('scrolled');
            header.classList.remove('hidden');
        }
        
        lastScroll = currentScroll;
    });
}

// Loading Screen
function initLoading() {
    window.addEventListener('load', function() {
        const loading = document.getElementById('loading');
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
        }, 300);
    });
}

// Form Validation will be added later
