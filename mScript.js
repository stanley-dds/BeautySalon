document.addEventListener("DOMContentLoaded", () => {
    // Таймер появления заглавного текста и стрелочки вниз через 2 секунды
    setTimeout(() => {
        document.querySelector(".hero-content").classList.add("visible");
        document.getElementById("scrollDown").classList.add("visible");
    }, 2000);

    // Плавная прокрутка к секциям при нажатии на кнопку в хедере
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

    // Прокрутка вниз при нажатии на стрелку
    document.getElementById("scrollDown").addEventListener("click", () => {
        document.querySelector("#services").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    // Показываем стрелку вверх при прокрутке вниз
    const scrollUpButton = document.getElementById("scrollUp");
    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight) {
            scrollUpButton.classList.add("visible");
        } else {
            scrollUpButton.classList.remove("visible");
        }
    });

    // Прокрутка вверх при нажатии на стрелку вверх
    scrollUpButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Принудительная фиксация на секциях при остановке прокрутки
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

    // === Новый код: Плавное изменение цвета кнопки при клике ===
    document.querySelectorAll("header nav a").forEach(button => {
        button.addEventListener("click", function () {
            let originalColor = this.style.color; // Сохраняем текущий цвет
            this.style.color = "green"; // Меняем цвет на зеленый
            setTimeout(() => {
                this.style.color = originalColor; // Возвращаем стандартный цвет
            }, 500); // Полсекунды
        });
    });

    // === Исправленный код для анимации карусели ===
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        allowTouchMove: true,
        on: {
            slideChangeTransitionEnd: function () {
                document.querySelectorAll(".swiper-slide").forEach(slide => {
                    slide.classList.remove("active");
                });
                document.querySelector(".swiper-slide-active").classList.add("active");
            }
        }
    });

    // Запускаем анимацию для первого слайда при загрузке
    document.querySelector(".swiper-slide").classList.add("active");
});
