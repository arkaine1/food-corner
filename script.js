// Smooth Scrolling for Navbar Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            window.location.href = this.href;  // External links will work
        }
    });
});

// Alert on Contact Button Click
const contactButton = document.querySelector('.cta-button');
if (contactButton) {
    contactButton.addEventListener('click', () => {
        alert("Redirecting to Menu Page!");
    });
}

// Highlight Navigation Links on Scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - 100) {
            let id = section.getAttribute('class');
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
                if (link.href.includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Form Validation for Contact Section
document.querySelector('.contact').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you for contacting us!");
});