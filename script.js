//ЗАГРУЗКА HTML И ТОЛЬКО ПОТОМ ОСТАЛЬНОЕ
document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById("scrollToTop");
    const scrollDownButton = document.getElementById("scrollDown");
       
    const header = document.querySelector("header");
    let isScrolling;
    

    const scrollDownToSection4 = document.getElementById("scrollDownToSection4");
    const section4 = document.getElementById("section4");


    // Плавная прокрутка к секциям
    document.querySelectorAll('header nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        });
    });

    // Плавная прокрутка вверх при клике на стрелочку
    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });


    // Плавная прокрутка вниз при клике на стрелочку вниз (в секцию 2)
    scrollDownButton.addEventListener("click", () => {
        const section2 = document.getElementById("section2");
        section2.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });

    // Показываем/скрываем стрелочку при прокрутке
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollToTopButton.style.display = "flex";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    // Функция для управления прозрачностью кнопок
    window.addEventListener("scroll", () => {
        // Уменьшаем прозрачность при прокрутке
        header.classList.add("scrolled");

        // Очищаем предыдущий таймер
        clearTimeout(isScrolling);

        // Таймер для восстановления прозрачности после остановки прокрутки
        isScrolling = setTimeout(() => {
            header.classList.remove("scrolled");
        }, 200); // Восстанавливаем через 200 мс после остановки
    });

    // Прокрутка вниз к секции 4
    scrollDownToSection4.addEventListener("click", () => {
        section4.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });

    document.addEventListener("DOMContentLoaded", () => {
        function checkMobileVersion() {
            if (/Mobi|Android|iPhone|iPad/.test(navigator.userAgent)) {
                window.location.href = "mIndex.html"; // Перенаправляем на мобильную версию
            }
        }
    
        checkMobileVersion();
    });

});





