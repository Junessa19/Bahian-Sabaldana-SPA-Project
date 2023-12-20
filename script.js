function showSection(sectionId) {
    document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('active');
    });
    
    document.querySelector(a[href="#${sectionId}"]).classList.add('active');
    
    document.getElementById(sectionId).scrollIntoView({
    behavior: 'smooth'
    });
    }
    
    window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > header.clientHeight) {
    navbar.style.backgroundColor = '#333';
    } else {
    navbar.style.backgroundColor = '#444';
    }
    });