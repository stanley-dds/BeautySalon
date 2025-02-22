document.addEventListener("DOMContentLoaded", () => {

    // 1. Таймер для появления заглавного текста и стрелочки вниз через 2 секунды
    setTimeout(() => {
        document.querySelector(".hero-content").classList.add("visible");
        document.getElementById("scrollDown").classList.add("visible");
    }, 2000);

    // 2. Плавная прокрутка к секциям при нажатии на кнопку в хедере
    document.querySelectorAll("header nav a, .logo").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    });

    // 3. Прокрутка вниз при нажатии на стрелку в заглавной секции
    document.getElementById("scrollDown").addEventListener("click", () => {
        let nextSection = document.querySelector("#services");
        nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // 4. Показываем стрелку вверх при прокрутке вниз
    const scrollUpButton = document.getElementById("scrollUp");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight) {
            scrollUpButton.classList.add("visible");
        } else {
            scrollUpButton.classList.remove("visible");
        }
    });

    // 5. Прокрутка вверх при нажатии на стрелку вверх
    scrollUpButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // 6. Принудительная фиксация на секциях при остановке прокрутки
    let scrollTimeout;
    document.addEventListener("scroll", () => {
        clearTimeout(scrollTimeout);

        scrollTimeout = setTimeout(() => {
            let sections = document.querySelectorAll(".full-section");
            let scrollPosition = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                let sectionTop = section.offsetTop;
                let sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            });
        }, 200);
    });

    // 7. Инициализация карусели Swiper.js
    new Swiper('.swiper', {
        slidesPerView: 1, // Показывает 1 изображение за раз
        spaceBetween: 20, // Отступ между слайдами
        loop: true, // Зацикленная прокрутка
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        allowTouchMove: true, // Разрешаем свайпы
        touchStartPreventDefault: false, // Отключаем вертикальный скролл при горизонтальном свайпе
    });

});
