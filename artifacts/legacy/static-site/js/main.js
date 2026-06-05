let currentLang = 'ja';

function toggleLanguage() {
    currentLang = currentLang === 'ja' ? 'en' : 'ja';
    const langBtn = document.querySelector('.lang-switch');
    langBtn.textContent = currentLang === 'ja' ? 'EN' : 'JA';
    
    document.querySelectorAll('[data-ja]').forEach(element => {
        element.innerHTML = element.getAttribute(`data-${currentLang}`);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Website initialized');
}); 