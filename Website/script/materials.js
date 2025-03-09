document.addEventListener("DOMContentLoaded", function() {
    // Sekcja nagłówka
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.navbar__menu');
    const oneLink = document.querySelectorAll('.navbar__item');

    menu.addEventListener('click', function() {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
    
    const images = document.querySelectorAll('#image');
    const imageMAT = document.querySelectorAll('#image-mat');

    images.forEach(img => {
        const orginalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover');

        img.addEventListener('mouseenter', () => {
            img.src = hoverSrc
        });

        img.addEventListener('mouseleave', () => {
            img.src = orginalSrc
        });
    });
    
    imageMAT.forEach(img => {
        const orginalSrc = img.src;
        const hoverSrc = img.getAttribute('data-hover');

        img.addEventListener('mouseenter', () => {
            img.src = hoverSrc
        });

        img.addEventListener('mouseleave', () => {
            img.src = orginalSrc
        });
    });

    //Pobieranie pdf przez kliknięcie
    function downloadPDF(filePath, fileName) {
        const link = document.createElement('a');
        link.href = filePath;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    document.getElementById('btn-cart').addEventListener("click", function() {
        downloadPDF('style/download/karty_edukacyjne.pdf','Karty_Edukacyjne.pdf');
    });
});