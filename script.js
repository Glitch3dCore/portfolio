document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.getElementById('hamburger-btn');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    const btnDe = document.getElementById('btn-de');
    const btnEn = document.getElementById('btn-en');

    btnDe.addEventListener('click', () => switchLanguage('de'));
    btnEn.addEventListener('click', () => switchLanguage('en'));

    async function switchLanguage(lang) {
        localStorage.setItem('userLanguage', lang);

        try {
            const response = await fetch(`locales/${lang}.json`);
            if (!response.ok) throw new Error('JSON nicht gefunden');
            
            const translations = await response.json();

            document.querySelectorAll('[data-key]').forEach(element => {
                const key = element.getAttribute('data-key');
                if (translations[key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                         element.placeholder = translations[key];
                    } else {
                         element.textContent = translations[key];
                    }
                }
            });
        } catch (error) {
            console.error('Fehler beim Laden der Sprache:', error);
        }
    }

    function getInitialLanguage() {
        const savedLang = localStorage.getItem('userLanguage');
        if (savedLang) return savedLang;
        
        return 'en';
    }

    switchLanguage(getInitialLanguage());
});