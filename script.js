document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = mobileBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileBtn.querySelector('i').classList.remove('fa-xmark');
                mobileBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        }
    });

    // Handle Contact Form Submission
    const contactForm = document.getElementById('appointmentForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Gather form data
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const serviceSelect = document.getElementById('service');
            const service = serviceSelect.options[serviceSelect.selectedIndex].text;
            const date = document.getElementById('date').value;
            const message = document.getElementById('message').value;
            
            // Construct WhatsApp message
            let whatsappText = `Hello, I would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nPreferred Date: ${date}`;
            if (message.trim() !== '') {
                whatsappText += `\nAdditional Notes: ${message}`;
            }
            
            // Open WhatsApp
            const whatsappUrl = `https://wa.me/919154355592?text=${encodeURIComponent(whatsappText)}`;
            window.open(whatsappUrl, '_blank');
            
            // Reset form
            contactForm.reset();
        });
    }
});
